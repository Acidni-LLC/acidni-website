/**
 * Acidni Feedback SDK
 * 
 * Submit feedback, bug reports, and feature requests from your apps to Acidni.
 * 
 * @example
 * ```typescript
 * import { AcidniFeedback } from '@acidni/feedback-sdk';
 * 
 * const feedback = new AcidniFeedback({
 *   app: 'ACCM',
 *   version: '1.2.3',
 * });
 * 
 * // Open feedback form in browser
 * feedback.openFeedbackForm('bug');
 * 
 * // Or submit programmatically
 * await feedback.submit({
 *   type: 'bug',
 *   title: 'Button not working',
 *   description: 'The save button does not respond to clicks',
 *   email: 'user@example.com',
 * });
 * ```
 */

export type FeedbackType = 'bug' | 'feedback' | 'feature';

export interface FeedbackConfig {
  /** Name of your app (e.g., 'ACCM', 'Terprint') */
  app: string;
  /** Version of your app */
  version: string;
  /** Optional user ID for tracking */
  userId?: string;
  /** Platform (auto-detected if not provided) */
  platform?: string;
  /** Base URL for the feedback portal (defaults to acidni.net) */
  baseUrl?: string;
  /** Additional metadata to include */
  metadata?: Record<string, string>;
}

export interface FeedbackSubmission {
  /** Type of feedback */
  type: FeedbackType;
  /** Brief title/subject */
  title: string;
  /** Detailed description */
  description: string;
  /** User's email for follow-up (optional) */
  email?: string;
  /** Accept IP release terms (required for feature requests) */
  acceptTerms?: boolean;
}

export interface FeedbackResult {
  success: boolean;
  ticketId?: string;
  workItemId?: number;
  message?: string;
  error?: string;
}

/**
 * Acidni Feedback SDK
 * 
 * Provides methods to submit feedback, bug reports, and feature requests
 * from your Acidni apps and add-ins.
 */
export class AcidniFeedback {
  private config: Required<Pick<FeedbackConfig, 'app' | 'version' | 'baseUrl'>> & FeedbackConfig;
  private sessionId: string;

  constructor(config: FeedbackConfig) {
    this.config = {
      ...config,
      baseUrl: config.baseUrl || 'https://www.acidni.net',
      userId: config.userId || 'anonymous',
      platform: config.platform || this.detectPlatform(),
    };
    this.sessionId = this.generateSessionId();
  }

  /**
   * Get the URL for the feedback form with pre-filled metadata
   */
  getFeedbackUrl(type?: FeedbackType): string {
    const params = new URLSearchParams({
      app: this.config.app,
      version: this.config.version,
      userId: this.config.userId || 'anonymous',
      platform: this.config.platform || 'Unknown',
      sessionId: this.sessionId,
      ...(type && { type }),
      ...(this.config.metadata || {}),
    });

    return `${this.config.baseUrl}/feedback?${params.toString()}`;
  }

  /**
   * Open the feedback form in the user's browser
   * 
   * @param type - Optional pre-selected feedback type
   * @returns The URL that was opened
   */
  openFeedbackForm(type?: FeedbackType): string {
    const url = this.getFeedbackUrl(type);
    
    // Try different methods to open the URL
    if (typeof window !== 'undefined' && window.open) {
      window.open(url, '_blank');
    } else if (typeof process !== 'undefined') {
      // Node.js environment - use open command
      const { exec } = require('child_process');
      const platform = process.platform;
      
      if (platform === 'win32') {
        exec(`start "" "${url}"`);
      } else if (platform === 'darwin') {
        exec(`open "${url}"`);
      } else {
        exec(`xdg-open "${url}"`);
      }
    }

    return url;
  }

  /**
   * Submit feedback programmatically via API
   * 
   * @param submission - The feedback to submit
   * @returns Result with ticket ID on success
   */
  async submit(submission: FeedbackSubmission): Promise<FeedbackResult> {
    // Validate feature request terms
    if (submission.type === 'feature' && !submission.acceptTerms) {
      return {
        success: false,
        error: 'Feature requests require acceptance of IP release terms',
      };
    }

    const payload = {
      ...submission,
      metadata: {
        app: this.config.app,
        version: this.config.version,
        userId: this.config.userId || 'anonymous',
        platform: this.config.platform || 'Unknown',
        sessionId: this.sessionId,
        timestamp: new Date().toISOString(),
        ...(this.config.metadata || {}),
      },
    };

    try {
      const response = await fetch(`${this.config.baseUrl}/api/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: result.error || 'Failed to submit feedback',
        };
      }

      return {
        success: true,
        ticketId: result.ticketId,
        workItemId: result.workItemId,
        message: result.message,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error',
      };
    }
  }

  /**
   * Submit a bug report
   */
  async submitBug(title: string, description: string, email?: string): Promise<FeedbackResult> {
    return this.submit({ type: 'bug', title, description, email });
  }

  /**
   * Submit feedback/comment
   */
  async submitFeedback(title: string, description: string, email?: string): Promise<FeedbackResult> {
    return this.submit({ type: 'feedback', title, description, email });
  }

  /**
   * Submit a feature request (requires accepting terms)
   */
  async submitFeature(title: string, description: string, email?: string): Promise<FeedbackResult> {
    return this.submit({ type: 'feature', title, description, email, acceptTerms: true });
  }

  private detectPlatform(): string {
    if (typeof window !== 'undefined') {
      const ua = window.navigator?.userAgent || '';
      if (ua.includes('VSCode')) return 'VS Code';
      if (ua.includes('Electron')) return 'Desktop App';
      if (ua.includes('Windows')) return 'Windows';
      if (ua.includes('Mac')) return 'macOS';
      if (ua.includes('Linux')) return 'Linux';
      return 'Web';
    }
    if (typeof process !== 'undefined') {
      return process.platform === 'win32' ? 'Windows' 
           : process.platform === 'darwin' ? 'macOS' 
           : 'Linux';
    }
    return 'Unknown';
  }

  private generateSessionId(): string {
    return 'sess_' + Math.random().toString(36).substring(2, 15);
  }
}

// Default export for convenience
export default AcidniFeedback;

// VS Code Extension specific helper
export function createVSCodeFeedback(context: { extension: { packageJSON: { name: string; version: string } } }): AcidniFeedback {
  const pkg = context.extension.packageJSON;
  return new AcidniFeedback({
    app: pkg.name,
    version: pkg.version,
    platform: 'VS Code',
  });
}
