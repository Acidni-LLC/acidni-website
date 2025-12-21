# Acidni Feedback Integration Guide

This document provides integration examples for embedding the Acidni feedback system into your applications.

## Overview

The feedback portal accepts the following URL parameters to pre-populate metadata:

| Parameter | Description | Example |
|-----------|-------------|---------|
| `app` | Application name | `ACCM` |
| `version` | Application version | `1.2.3` |
| `userId` | User identifier | `user@example.com` |
| `platform` | Platform/runtime | `VS Code`, `Windows`, `Web` |
| `sessionId` | Session identifier | `sess_abc123` |
| `type` | Pre-select type | `bug`, `feedback`, `feature` |
| `*` | Any custom param | Your custom metadata |

## Base URL

```
https://www.acidni.net/feedback
```

---

## VS Code Extension Integration

### TypeScript/JavaScript

```typescript
import * as vscode from 'vscode';

interface FeedbackOptions {
  type?: 'bug' | 'feedback' | 'feature';
}

export function openFeedbackPortal(context: vscode.ExtensionContext, options: FeedbackOptions = {}) {
  const extension = vscode.extensions.getExtension('AcidniLLC.your-extension-id');
  const version = extension?.packageJSON.version || 'unknown';
  
  // Get user info if available
  const machineId = vscode.env.machineId;
  const sessionId = vscode.env.sessionId;
  
  // Build URL with metadata
  const params = new URLSearchParams({
    app: 'Your Extension Name',
    version: version,
    userId: machineId,
    sessionId: sessionId,
    platform: 'VS Code',
    vscodeVersion: vscode.version,
    language: vscode.env.language,
    ...(options.type && { type: options.type }),
  });

  const feedbackUrl = `https://www.acidni.net/feedback?${params.toString()}`;
  
  // Open in external browser or webview
  vscode.env.openExternal(vscode.Uri.parse(feedbackUrl));
}

// Register commands
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('yourExtension.reportBug', () => {
      openFeedbackPortal(context, { type: 'bug' });
    }),
    vscode.commands.registerCommand('yourExtension.sendFeedback', () => {
      openFeedbackPortal(context, { type: 'feedback' });
    }),
    vscode.commands.registerCommand('yourExtension.requestFeature', () => {
      openFeedbackPortal(context, { type: 'feature' });
    })
  );
}
```

### package.json Commands

```json
{
  "contributes": {
    "commands": [
      {
        "command": "yourExtension.reportBug",
        "title": "Report a Bug",
        "category": "Your Extension"
      },
      {
        "command": "yourExtension.sendFeedback",
        "title": "Send Feedback",
        "category": "Your Extension"
      },
      {
        "command": "yourExtension.requestFeature",
        "title": "Request a Feature",
        "category": "Your Extension"
      }
    ],
    "menus": {
      "commandPalette": [
        { "command": "yourExtension.reportBug" },
        { "command": "yourExtension.sendFeedback" },
        { "command": "yourExtension.requestFeature" }
      ]
    }
  }
}
```

---

## Web Application Integration

### React Component

```tsx
import React from 'react';

interface FeedbackButtonProps {
  appName: string;
  appVersion: string;
  userId?: string;
  type?: 'bug' | 'feedback' | 'feature';
  className?: string;
  children?: React.ReactNode;
}

export const FeedbackButton: React.FC<FeedbackButtonProps> = ({
  appName,
  appVersion,
  userId,
  type,
  className,
  children,
}) => {
  const openFeedback = () => {
    const params = new URLSearchParams({
      app: appName,
      version: appVersion,
      platform: 'Web',
      ...(userId && { userId }),
      ...(type && { type }),
      screenWidth: window.screen.width.toString(),
      screenHeight: window.screen.height.toString(),
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });

    window.open(
      `https://www.acidni.net/feedback?${params.toString()}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <button onClick={openFeedback} className={className}>
      {children || 'Send Feedback'}
    </button>
  );
};

// Usage:
// <FeedbackButton appName="Terprint" appVersion="2.1.0" userId={user.id} type="feedback">
//   💬 Feedback
// </FeedbackButton>
```

### Vanilla JavaScript

```javascript
function openAcidniFeedback(options = {}) {
  const defaults = {
    app: 'Your App Name',
    version: '1.0.0',
    platform: 'Web',
  };

  const params = new URLSearchParams({
    ...defaults,
    ...options,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    language: navigator.language,
    url: window.location.href,
  });

  window.open(
    `https://www.acidni.net/feedback?${params.toString()}`,
    '_blank'
  );
}

// Usage:
// openAcidniFeedback({ type: 'bug', userId: 'user123' });
```

---

## Electron / Desktop App Integration

### Main Process

```typescript
import { shell, app } from 'electron';

interface FeedbackOptions {
  type?: 'bug' | 'feedback' | 'feature';
  userId?: string;
  sessionData?: Record<string, string>;
}

export function openFeedbackPortal(options: FeedbackOptions = {}) {
  const params = new URLSearchParams({
    app: app.getName(),
    version: app.getVersion(),
    platform: process.platform === 'win32' ? 'Windows' 
            : process.platform === 'darwin' ? 'macOS' 
            : 'Linux',
    electronVersion: process.versions.electron,
    nodeVersion: process.versions.node,
    arch: process.arch,
    ...(options.userId && { userId: options.userId }),
    ...(options.type && { type: options.type }),
    ...(options.sessionData || {}),
  });

  const feedbackUrl = `https://www.acidni.net/feedback?${params.toString()}`;
  shell.openExternal(feedbackUrl);
}
```

### Renderer Process (with IPC)

```typescript
// preload.ts
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('feedback', {
  reportBug: () => ipcRenderer.send('open-feedback', { type: 'bug' }),
  sendFeedback: () => ipcRenderer.send('open-feedback', { type: 'feedback' }),
  requestFeature: () => ipcRenderer.send('open-feedback', { type: 'feature' }),
});

// main.ts
import { ipcMain } from 'electron';

ipcMain.on('open-feedback', (event, options) => {
  openFeedbackPortal(options);
});
```

---

## Mobile App Integration (React Native)

```typescript
import { Linking, Platform, Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';

interface FeedbackOptions {
  type?: 'bug' | 'feedback' | 'feature';
  userId?: string;
}

export async function openFeedback(options: FeedbackOptions = {}) {
  const { width, height } = Dimensions.get('window');
  
  const params = new URLSearchParams({
    app: DeviceInfo.getApplicationName(),
    version: DeviceInfo.getVersion(),
    buildNumber: DeviceInfo.getBuildNumber(),
    platform: Platform.OS === 'ios' ? 'iOS' : 'Android',
    deviceModel: await DeviceInfo.getModel(),
    osVersion: DeviceInfo.getSystemVersion(),
    screenWidth: width.toString(),
    screenHeight: height.toString(),
    ...(options.userId && { userId: options.userId }),
    ...(options.type && { type: options.type }),
  });

  const url = `https://www.acidni.net/feedback?${params.toString()}`;
  
  if (await Linking.canOpenURL(url)) {
    await Linking.openURL(url);
  }
}
```

---

## Direct API Integration

If you prefer to submit feedback directly via API:

### Endpoint

```
POST https://www.acidni.net/api/feedback
Content-Type: application/json
```

### Request Body

```json
{
  "type": "bug",
  "title": "App crashes on startup",
  "description": "Detailed description of the issue...",
  "email": "user@example.com",
  "acceptTerms": true,
  "metadata": {
    "app": "ACCM",
    "version": "1.2.3",
    "userId": "user123",
    "platform": "VS Code",
    "sessionId": "sess_abc123",
    "userAgent": "...",
    "screenResolution": "1920x1080",
    "timestamp": "2024-01-15T10:30:00Z",
    "referrer": "",
    "customField": "custom value"
  }
}
```

### Response

```json
{
  "success": true,
  "ticketId": "ACCM-12345",
  "workItemId": 12345,
  "message": "Feedback submitted successfully"
}
```

### cURL Example

```bash
curl -X POST https://www.acidni.net/api/feedback \
  -H "Content-Type: application/json" \
  -d '{
    "type": "feedback",
    "title": "Great extension!",
    "description": "Love the word cloud feature.",
    "email": "user@example.com",
    "metadata": {
      "app": "ACCM",
      "version": "1.0.0",
      "platform": "VS Code"
    }
  }'
```

---

## Best Practices

1. **Always include app name and version** - This helps us track issues across releases
2. **Collect session IDs** - Helps correlate with App Insights telemetry
3. **Pre-select type when context is clear** - If user clicks "Report Bug", set `type=bug`
4. **Include relevant context** - Add any metadata that helps diagnose issues
5. **Respect user privacy** - Only collect what you need and disclose in your privacy policy

---

## Environment Variables for API

The API function requires these environment variables:

```
AZURE_DEVOPS_ORG_URL=https://dev.azure.com/YourOrg
AZURE_DEVOPS_PAT=your-personal-access-token
AZURE_DEVOPS_PROJECT=YourProject
AZURE_DEVOPS_AREA_PATH=YourProject\Feedback (optional)
EMAIL_NOTIFICATION_ENDPOINT=https://your-email-api.com/send (optional)
NOTIFICATION_EMAIL=contact@acidni.net (optional)
```

---

## Support

For questions about integration, contact: contact@acidni.net
