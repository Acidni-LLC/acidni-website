---
description: 'Python 3.12+ coding standards for Acidni LLC projects'
applyTo: '**/*.py'
---

# Python Development Instructions

Instructions for Python development in Acidni LLC projects, targeting Python 3.12+ on Azure Functions.

## Project Context

- Target runtime: Python 3.12+
- Primary platform: Azure Functions (Consumption Plan - Linux)
- Package management: pip with `requirements.txt` or `pyproject.toml`
- Testing: pytest

## Critical Rules

### Database Drivers

```python
# ✅ CORRECT - pymssql works on Azure Functions (Linux)
import pymssql
conn = pymssql.connect(server, user, password, database)
cursor = conn.cursor()
cursor.execute("SELECT * FROM Users WHERE Id = %s", (user_id,))

# ❌ WRONG - pyodbc requires ODBC drivers (not available on Consumption Plan)
import pyodbc
conn = pyodbc.connect(connection_string)
cursor.execute("SELECT * FROM Users WHERE Id = ?", (user_id,))
```

### Placeholder Syntax

| Driver | Placeholder | Example |
|--------|-------------|---------|
| pymssql | `%s` | `cursor.execute("WHERE id = %s", (id,))` |
| pyodbc | `?` | `cursor.execute("WHERE id = ?", (id,))` |

Always use `%s` for parameterized queries with pymssql.

## Type Hints

Use type hints for all function signatures:

```python
# ✅ Good - Clear type annotations
def process_batch(batch_id: str, options: dict[str, Any] | None = None) -> BatchResult:
    """Process a data batch."""
    pass

# ❌ Avoid - No type information
def process_batch(batch_id, options=None):
    pass
```

## Async/Await Patterns

For Azure Functions, prefer async when making I/O calls:

```python
import aiohttp
import asyncio

async def fetch_menu_data(url: str) -> dict:
    """Fetch menu data asynchronously."""
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.json()

# In Azure Function
async def main(req: func.HttpRequest) -> func.HttpResponse:
    data = await fetch_menu_data(api_url)
    return func.HttpResponse(json.dumps(data))
```

## Error Handling

```python
# ✅ Good - Specific exceptions with context
try:
    response = await client.fetch_data()
except aiohttp.ClientConnectionError as e:
    logger.error(f"Connection failed: {e}")
    raise ServiceUnavailableError("External API unreachable") from e
except aiohttp.ClientResponseError as e:
    if e.status == 429:
        await asyncio.sleep(retry_delay)
        return await fetch_with_retry()
    raise

# ❌ Avoid - Catching all exceptions
try:
    response = client.fetch_data()
except Exception:
    pass  # Silent failure
```

## Logging

Use structured logging with Application Insights:

```python
import logging
import azure.functions as func

logger = logging.getLogger(__name__)

def main(req: func.HttpRequest) -> func.HttpResponse:
    logger.info(
        "Processing request",
        extra={
            "correlation_id": req.headers.get("x-correlation-id"),
            "batch_id": req.params.get("batch_id"),
        }
    )
```

## Project Structure

```
project/
├── src/
│   ├── __init__.py
│   ├── handlers/          # Azure Function handlers
│   │   ├── __init__.py
│   │   └── http_trigger.py
│   ├── services/          # Business logic
│   │   ├── __init__.py
│   │   └── batch_service.py
│   └── models/            # Data models
│       ├── __init__.py
│       └── batch.py
├── tests/
│   ├── __init__.py
│   ├── unit/
│   └── integration/
├── requirements.txt
├── pyproject.toml
└── host.json
```

## Required Dependencies

```txt
# requirements.txt
azure-functions>=1.17.0
azure-identity>=1.15.0
pymssql>=2.2.0
aiohttp>=3.9.0
pyjwt[crypto]>=2.8.0
```

## Testing with pytest

```python
# tests/unit/test_batch_service.py
import pytest
from src.services.batch_service import process_batch

class TestProcessBatch:
    def test_returns_success_when_valid_input(self):
        result = process_batch(batch_id="test-123")
        assert result.success is True
    
    def test_raises_error_when_batch_not_found(self):
        with pytest.raises(BatchNotFoundError):
            process_batch(batch_id="nonexistent")
    
    @pytest.mark.asyncio
    async def test_async_fetch_returns_data(self):
        data = await fetch_menu_data("https://api.example.com")
        assert "items" in data
```

## Configuration Pattern

```python
from dataclasses import dataclass
from os import environ

@dataclass(frozen=True)
class Config:
    """Application configuration loaded from environment."""
    database_server: str
    database_name: str
    azure_tenant_id: str
    azure_client_id: str
    
    @classmethod
    def from_env(cls) -> "Config":
        return cls(
            database_server=environ["DATABASE_SERVER"],
            database_name=environ["DATABASE_NAME"],
            azure_tenant_id=environ["AZURE_TENANT_ID"],
            azure_client_id=environ["AZURE_CLIENT_ID"],
        )

# Usage
config = Config.from_env()
```

## Code Style

- Follow PEP 8
- Use `black` for formatting
- Use `ruff` for linting
- Maximum line length: 100 characters
- Use f-strings for string formatting
