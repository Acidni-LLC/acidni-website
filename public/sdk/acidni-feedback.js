/**
 * Acidni Feedback SDK (JavaScript)
 * 
 * Lightweight SDK for integrating Acidni feedback portal into your applications.
 * Works in browsers, Node.js, VS Code extensions, and Electron apps.
 */

class AcidniFeedback {
  constructor(config) {
    this.config = {
      baseUrl: 'https://www.acidni.net',
      ...config,
    };
    this.sessionId = config.sessionId || this._generateSessionId();
  }

  /**
   * Generate the feedback portal URL with all metadata
   */
  getPortalUrl(options = {}) {
    const params = new URLSearchParams({
      app: this.config.app,
      version: this.config.version,
      sessionId: this.sessionId,
      platform: this.config.platform || this._detectPlatform(),
    });

    if (this.config.userId) params.set('userId', this.config.userId);
    if (options.type) params.set('type', options.type);

    // Add custom metadata
    if (this.config.customMetadata) {
      Object.entries(this.config.customMetadata).forEach(([key, value]) => {
        params.set(key, value);
      });
    }

    // Add browser-specific metadata if available
    if (typeof window !== 'undefined') {
      params.set('screenWidth', window.screen.width.toString());
      params.set('screenHeight', window.screen.height.toString());
      params.set('language', navigator.language);
      params.set('url', window.location.href);
    }

    return `${this.config.baseUrl}/feedback?${params.toString()}`;
  }

  /**
   * Open the feedback portal in a browser window
   */
  openPortal(options = {}) {
    const url = this.getPortalUrl(options);

    if (typeof window !== 'undefined') {
      // Browser environment
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (typeof require !== 'undefined') {
      // Node.js / Electron
      try {
        const { shell } = require('electron');
        shell.openExternal(url);
      } catch {
        const open = require('open');
        open(url);
      }
    }
  }

  /**
   * Submit feedback directly via API
   */
  async submit(submission) {
    if (submission.type === 'feature' && !submission.acceptTerms) {
      return {
        success: false,
        error: 'Feature requests require acceptTerms to be true',
      };
    }

    const metadata = this._collectMetadata();

    try {
      const response = await fetch(`${this.config.baseUrl}/api/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...submission,
          metadata,
        }),
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
      };
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Network error',
      };
    }
  }

  reportBug() {
    this.openPortal({ type: 'bug' });
  }

  sendFeedback() {
    this.openPortal({ type: 'feedback' });
  }

  requestFeature() {
    this.openPortal({ type: 'feature' });
  }

  setUserId(userId) {
    this.config.userId = userId;
  }

  setCustomMetadata(key, value) {
    this.config.customMetadata = this.config.customMetadata || {};
    this.config.customMetadata[key] = value;
  }

  getSessionId() {
    return this.sessionId;
  }

  _collectMetadata() {
    const metadata = {
      app: this.config.app,
      version: this.config.version,
      sessionId: this.sessionId,
      platform: this.config.platform || this._detectPlatform(),
      timestamp: new Date().toISOString(),
    };

    if (this.config.userId) {
      metadata.userId = this.config.userId;
    }

    if (typeof window !== 'undefined') {
      metadata.userAgent = navigator.userAgent;
      metadata.screenResolution = `${window.screen.width}x${window.screen.height}`;
      metadata.language = navigator.language;
      metadata.url = window.location.href;
      metadata.referrer = document.referrer;
    }

    if (typeof process !== 'undefined' && process.versions) {
      metadata.nodeVersion = process.versions.node || '';
      metadata.arch = process.arch;
    }

    if (this.config.customMetadata) {
      Object.assign(metadata, this.config.customMetadata);
    }

    return metadata;
  }

  _detectPlatform() {
    if (typeof process !== 'undefined' && process.versions?.electron) {
      if (typeof navigator !== 'undefined' && navigator.userAgent?.includes('VSCode')) {
        return 'VS Code';
      }
      return 'Desktop App';
    }

    if (typeof window !== 'undefined') {
      const ua = navigator.userAgent;
      if (ua.includes('Windows')) return 'Windows';
      if (ua.includes('Mac')) return 'macOS';
      if (ua.includes('Linux')) return 'Linux';
      if (ua.includes('Android')) return 'Android';
      if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
      return 'Web';
    }

    if (typeof process !== 'undefined') {
      switch (process.platform) {
        case 'win32': return 'Windows';
        case 'darwin': return 'macOS';
        case 'linux': return 'Linux';
        default: return 'Server';
      }
    }

    return 'Unknown';
  }

  _generateSessionId() {
    return 'sess_' + Math.random().toString(36).substring(2, 15) +
           Math.random().toString(36).substring(2, 15);
  }
}

/**
 * VS Code Extension helper
 */
function createVSCodeFeedback(extensionId, vscode) {
  const extension = vscode.extensions.getExtension(extensionId);
  
  return new AcidniFeedback({
    app: extension?.packageJSON.displayName || extensionId,
    version: extension?.packageJSON.version || 'unknown',
    userId: vscode.env.machineId,
    sessionId: vscode.env.sessionId,
    platform: 'VS Code',
    customMetadata: {
      vscodeVersion: vscode.version,
      language: vscode.env.language,
      uiKind: vscode.env.uiKind === vscode.UIKind.Desktop ? 'Desktop' : 'Web',
    },
  });
}

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AcidniFeedback, createVSCodeFeedback };
}

if (typeof window !== 'undefined') {
  window.AcidniFeedback = AcidniFeedback;
  window.createVSCodeFeedback = createVSCodeFeedback;
}
