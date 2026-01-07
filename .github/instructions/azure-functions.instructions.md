---
description: 'Azure Functions development standards for Acidni LLC'
applyTo: '**/function.json, **/host.json, **/*_trigger.py, **/function_app.py'
---

# Azure Functions Development Instructions

Instructions for developing Azure Functions in Acidni LLC projects, focusing on serverless patterns and best practices.

## Project Context

- Runtime: Azure Functions v4
- Hosting: Consumption Plan (Linux)
- Languages: Python 3.12+ (primary), C# .NET 8 (secondary)
- Authentication: Entra ID (never API keys for app-to-app)

## Critical Rules

### Authentication Levels

```json
// ✅ CORRECT - Requires function key or bearer token
{
  "authLevel": "function",
  "type": "httpTrigger",
  "direction": "in",
  "name": "req",
  "methods": ["get", "post"]
}

// ❌ WRONG - No authentication (security risk)
{
  "authLevel": "anonymous",
  "type": "httpTrigger"
}
```

**Exception**: Health check endpoints (`/api/health`) may be anonymous for load balancer probes.

### App-to-App Authentication

Always use Entra ID Bearer tokens for service-to-service calls:

```python
from azure.identity import DefaultAzureCredential
import requests

def call_another_function(endpoint: str, scope: str) -> dict:
    """Call another Azure Function with Entra ID authentication."""
    credential = DefaultAzureCredential()
    token = credential.get_token(scope)
    
    headers = {
        "Authorization": f"Bearer {token.token}",
        "Content-Type": "application/json"
    }
    
    response = requests.get(endpoint, headers=headers)
    response.raise_for_status()
    return response.json()

# Usage
data = call_another_function(
    endpoint="https://func-terprint-communications.azurewebsites.net/api/send",
    scope="api://func-terprint-communications/.default"
)
```

### Token Validation

```python
import jwt
from functools import wraps

def require_auth(required_scopes: list[str] = None):
    """Decorator to validate Bearer tokens on incoming requests."""
    def decorator(func):
        @wraps(func)
        def wrapper(req: func.HttpRequest, *args, **kwargs):
            auth_header = req.headers.get("Authorization")
            if not auth_header or not auth_header.startswith("Bearer "):
                return func.HttpResponse(status_code=401)
            
            token = auth_header[7:]
            try:
                # Validate token (use proper key retrieval in production)
                payload = jwt.decode(
                    token,
                    options={"verify_signature": True},
                    audience=os.environ["AZURE_CLIENT_ID"]
                )
                
                if required_scopes:
                    token_scopes = payload.get("scp", "").split()
                    if not any(s in token_scopes for s in required_scopes):
                        return func.HttpResponse(status_code=403)
                        
            except jwt.InvalidTokenError:
                return func.HttpResponse(status_code=401)
            
            return func(req, *args, **kwargs)
        return wrapper
    return decorator
```

## Project Structure

```
function-app/
├── src/
│   ├── __init__.py
│   ├── function_app.py         # Main function app entry
│   ├── http_trigger/
│   │   ├── __init__.py
│   │   └── function.json
│   └── timer_trigger/
│       ├── __init__.py
│       └── function.json
├── tests/
├── host.json
├── local.settings.json         # Local development (gitignored)
├── requirements.txt
└── openapi.json               # API specification (required)
```

## Host Configuration

```json
// host.json
{
  "version": "2.0",
  "logging": {
    "applicationInsights": {
      "samplingSettings": {
        "isEnabled": true,
        "maxTelemetryItemsPerSecond": 20,
        "excludedTypes": "Request"
      }
    },
    "logLevel": {
      "default": "Information",
      "Host.Results": "Error",
      "Function": "Information",
      "Host.Aggregator": "Trace"
    }
  },
  "extensions": {
    "http": {
      "routePrefix": "api",
      "maxConcurrentRequests": 100
    }
  },
  "functionTimeout": "00:10:00"
}
```

## Local Settings Template

```json
// local.settings.json (DO NOT COMMIT)
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "FUNCTIONS_WORKER_RUNTIME": "python",
    "AZURE_TENANT_ID": "your-tenant-id",
    "AZURE_CLIENT_ID": "your-app-client-id",
    "DATABASE_SERVER": "localhost",
    "DATABASE_NAME": "terprint"
  }
}
```

## HTTP Trigger Patterns

### Standard Response Format

```python
import azure.functions as func
import json
from dataclasses import dataclass, asdict

@dataclass
class ApiResponse:
    success: bool
    data: dict | None = None
    error: str | None = None

def http_response(response: ApiResponse, status_code: int = 200) -> func.HttpResponse:
    """Create standardized HTTP response."""
    return func.HttpResponse(
        body=json.dumps(asdict(response)),
        status_code=status_code,
        mimetype="application/json"
    )

# Usage
def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        data = process_request(req)
        return http_response(ApiResponse(success=True, data=data))
    except ValidationError as e:
        return http_response(ApiResponse(success=False, error=str(e)), 400)
    except Exception as e:
        logger.exception("Unexpected error")
        return http_response(ApiResponse(success=False, error="Internal error"), 500)
```

### Timer Trigger Pattern

```python
import azure.functions as func
import logging

def main(timer: func.TimerRequest) -> None:
    """Run daily at 6 AM EST."""
    if timer.past_due:
        logging.warning("Timer is past due, running anyway")
    
    logging.info("Starting daily batch processing")
    try:
        process_daily_batch()
        logging.info("Daily batch processing completed successfully")
    except Exception as e:
        logging.exception(f"Daily batch processing failed: {e}")
        raise  # Re-raise to mark function as failed
```

```json
// function.json for timer
{
  "scriptFile": "__init__.py",
  "bindings": [
    {
      "name": "timer",
      "type": "timerTrigger",
      "direction": "in",
      "schedule": "0 0 11 * * *"  // 6 AM EST = 11 AM UTC
    }
  ]
}
```

## Local Testing Ports

Each function app has assigned ports for running multiple services locally:

| App | Default Port | Port Range |
|-----|--------------|------------|
| func-terprint-communications | 7071 | 7071-7075 |
| func-terprint-batchprocessor | 7076 | 7076-7080 |
| func-terprint-menudownloader | 7081 | 7081-7085 |
| func-terprint-ai-chat | 7086 | 7086-7090 |

```powershell
# Start with custom port and window title
$Host.UI.RawUI.WindowTitle = "🔔 Communications (7071)"
func host start --port 7071
```

## OpenAPI Specification

Every HTTP-triggered function app **MUST** have `openapi.json` in the repo root:

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "Terprint Communications API",
    "version": "1.0.0"
  },
  "servers": [
    {"url": "https://func-terprint-communications.azurewebsites.net"}
  ],
  "paths": {
    "/api/send-email": {
      "post": {
        "summary": "Send an email notification",
        "security": [{"bearerAuth": []}],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {"$ref": "#/components/schemas/EmailRequest"}
            }
          }
        },
        "responses": {
          "200": {"description": "Email sent successfully"},
          "401": {"description": "Unauthorized"}
        }
      }
    }
  },
  "components": {
    "securitySchemes": {
      "bearerAuth": {
        "type": "http",
        "scheme": "bearer"
      }
    }
  }
}
```

## Error Handling Best Practices

```python
class FunctionError(Exception):
    """Base class for function errors."""
    status_code: int = 500

class ValidationError(FunctionError):
    status_code = 400

class NotFoundError(FunctionError):
    status_code = 404

class UnauthorizedError(FunctionError):
    status_code = 401

def handle_errors(func):
    """Decorator for consistent error handling."""
    @wraps(func)
    def wrapper(req: func.HttpRequest, *args, **kwargs):
        try:
            return func(req, *args, **kwargs)
        except FunctionError as e:
            return http_response(
                ApiResponse(success=False, error=str(e)),
                e.status_code
            )
        except Exception as e:
            logging.exception("Unhandled exception")
            return http_response(
                ApiResponse(success=False, error="Internal server error"),
                500
            )
    return wrapper
```
