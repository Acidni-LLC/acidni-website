# @acidni/feedback-sdk

SDK for submitting feedback, bug reports, and feature requests from Acidni apps and add-ins.

## Installation

```bash
npm install @acidni/feedback-sdk
```

## Usage

### In VS Code Extensions (like ACCM)

```typescript
import { AcidniFeedback, createVSCodeFeedback } from '@acidni/feedback-sdk';

// Option 1: Auto-configure from extension context
export function activate(context: vscode.ExtensionContext) {
  const feedback = createVSCodeFeedback(context);
  
  // Register command to open feedback form
  context.subscriptions.push(
    vscode.commands.registerCommand('accm.reportBug', () => {
      feedback.openFeedbackForm('bug');
    }),
    vscode.commands.registerCommand('accm.requestFeature', () => {
      feedback.openFeedbackForm('feature');
    }),
    vscode.commands.registerCommand('accm.sendFeedback', () => {
      feedback.openFeedbackForm();
    })
  );
}

// Option 2: Manual configuration
const feedback = new AcidniFeedback({
  app: 'ACCM',
  version: '1.2.3',
  platform: 'VS Code',
});
```

### In Web Apps (like Terprint)

```typescript
import { AcidniFeedback } from '@acidni/feedback-sdk';

const feedback = new AcidniFeedback({
  app: 'Terprint',
  version: '2.0.0',
  userId: currentUser?.id, // optional
});

// Open feedback form in new tab
document.getElementById('feedback-btn').onclick = () => {
  feedback.openFeedbackForm();
};

// Or submit programmatically
async function submitBug() {
  const result = await feedback.submitBug(
    'Data not loading',
    'The dispensary menu data is not loading on the dashboard',
    'user@email.com'
  );
  
  if (result.success) {
    alert(`Thank you! Ticket ID: ${result.ticketId}`);
  }
}
```

### In Node.js Apps

```typescript
import { AcidniFeedback } from '@acidni/feedback-sdk';

const feedback = new AcidniFeedback({
  app: 'My CLI Tool',
  version: '1.0.0',
});

// Open in default browser
feedback.openFeedbackForm('bug');

// Or submit via API
const result = await feedback.submit({
  type: 'feature',
  title: 'Add export to CSV',
  description: 'Would be great to export results to CSV format',
  acceptTerms: true, // Required for feature requests
});
```

## API Reference

### `AcidniFeedback`

#### Constructor

```typescript
new AcidniFeedback(config: FeedbackConfig)
```

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `app` | string | ✅ | Name of your app (e.g., 'ACCM', 'Terprint') |
| `version` | string | ✅ | Version of your app |
| `userId` | string | | User ID for tracking (defaults to 'anonymous') |
| `platform` | string | | Platform (auto-detected) |
| `baseUrl` | string | | Feedback portal URL (defaults to https://www.acidni.net) |
| `metadata` | object | | Additional metadata to include |

#### Methods

| Method | Description |
|--------|-------------|
| `getFeedbackUrl(type?)` | Get the URL for the feedback form |
| `openFeedbackForm(type?)` | Open feedback form in browser |
| `submit(submission)` | Submit feedback via API |
| `submitBug(title, description, email?)` | Submit a bug report |
| `submitFeedback(title, description, email?)` | Submit feedback |
| `submitFeature(title, description, email?)` | Submit feature request |

### Feedback Types

- `bug` - Bug reports / issues
- `feedback` - General feedback / comments
- `feature` - Feature requests (requires IP release acceptance)

## Direct URL Usage

If you don't want to use the SDK, you can link directly to the feedback form:

```
https://www.acidni.net/feedback?app=ACCM&version=1.2.3&type=bug
```

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| `app` | Your app name (required) |
| `version` | Your app version |
| `userId` | User identifier |
| `platform` | Platform name |
| `type` | Pre-select: `bug`, `feedback`, or `feature` |
| `sessionId` | Session tracking ID |

## License

MIT © Acidni LLC
