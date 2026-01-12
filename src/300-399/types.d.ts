declare global {
  namespace Express {
    interface Response {
      /** Redirect with 300-Multiple Choices status code */
      multipleChoices(url: string): void;

      /** Redirect with 301-Moved Permanently status code */
      movedPermanently(url: string): void;

      /** Redirect with 302-Found status code */
      found(url: string): void;

      /** Redirect with 303-See Other status code */
      seeOther(url: string): void;

      /** Respond with 304-Not Modified status code */
      notModified(): void;

      /**
       * Instructs the client to use a proxy server.
       * @deprecated HTTP 305 is deprecated; use `found`/`temporaryRedirect` or client-side proxy config.
       * @warning calling this method will log a warning in non-production environments.
       */
      useProxy(url: string, _data?: unknown): void;

      /**
       * Instructs the client to switch to a different protocol.
       * @deprecated HTTP 306 is deprecated; use `temporaryRedirect`/`permanentRedirect` instead.
       * @warning calling this method will log a warning in non-production environments.
       */
      switchProxy(url: string, _data?: unknown): void;

      /** Redirect with 307-Temporary Redirect status code */
      temporaryRedirect(url: string): void;

      /** Redirect with 308-Permanent Redirect status code */
      permanentRedirect(url: string): void;
    }
  }
}

export {};
