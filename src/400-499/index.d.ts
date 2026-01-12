declare global {
  namespace Express {
    interface Response {
      /**
       * Respond with 400-Bad Request status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.badRequest({ error: "Invalid input" }); -> { success: false, data: { error: "Invalid input" } }
       */
      badRequest<T = unknown>(data?: T): this;

      /**
       * Respond with 401-Unauthorized status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.unauthorized("Invalid Credentials"); -> { success: false, data: "Invalid Credentials" }
       */
      unauthorized<T = unknown>(data?: T): this;

      /**
       * Respond with 402-Payment Required status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.paymentRequired({ message: "Payment needed" }); -> { success: false, data: { message: "Payment needed" } }
       */
      paymentRequired<T = unknown>(data?: T): this;

      /**
       * Respond with 403-Forbidden status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.forbidden("Access denied"); -> { success: false, data: "Access denied" }
       */
      forbidden<T = unknown>(data?: T): this;

      /**
       * Respond with 404-Not Found status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.notFound({ resource: "User" }); -> { success: false, data: { resource: "User" } }
       */
      notFound<T = unknown>(data?: T): this;

      /**
       * Respond with 405-Method Not Allowed status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.methodNotAllowed("POST not allowed"); -> { success: false, data: "POST not allowed" }
       */
      methodNotAllowed<T = unknown>(data?: T): this;

      /**
       * Respond with 406-Not Acceptable status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.notAcceptable({ message: "Content type not acceptable" }); -> { success: false, data: { message: "Content type not acceptable" } }
       */
      notAcceptable<T = unknown>(data?: T): this;

      /**
       * Respond with 407-Proxy Authentication Required status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.proxyAuthenticationRequired("Proxy auth needed"); -> { success: false, data: "Proxy auth needed" }
       */
      proxyAuthenticationRequired<T = unknown>(data?: T): this;

      /**
       * Respond with 408-Request Timeout status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.requestTimeout("Request took too long"); -> { success: false, data: "Request took too long" }
       */
      requestTimeout<T = unknown>(data?: T): this;

      /**
       * Respond with 409-Conflict status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.conflict({ resource: "User already exists" }); -> { success: false, data: { resource: "User already exists" } }
       */
      conflict<T = unknown>(data?: T): this;

      /**
       * Respond with 410-Gone status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.gone("Resource no longer available"); -> { success: false, data: "Resource no longer available" }
       */
      gone<T = unknown>(data?: T): this;

      /**
       * Respond with 411-Length Required status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.lengthRequired("Content-Length header missing"); -> { success: false, data: "Content-Length header missing" }
       */
      lengthRequired<T = unknown>(data?: T): this;

      /**
       * Respond with 412-Precondition Failed status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.preconditionFailed({ message: "Precondition failed" }); -> { success: false, data: { message: "Precondition failed" } }
       */
      preconditionFailed<T = unknown>(data?: T): this;

      /**
       * Respond with 413-Content Too Large status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.contentTooLarge("Payload too large"); -> { success: false, data: "Payload too large" }
       */
      contentTooLarge<T = unknown>(data?: T): this;

      /**
       * Respond with 414-URI Too Long status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.uriTooLong("URI is too long"); -> { success: false, data: "URI is too long" }
       */
      uriTooLong<T = unknown>(data?: T): this;

      /**
       * Respond with 415-Unsupported Media Type status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.unsupportedMediaType({ type: "application/xml" }); -> { success: false, data: { type: "application/xml" } }
       */
      unsupportedMediaType<T = unknown>(data?: T): this;

      /**
       * Respond with 416-Range Not Satisfiable status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.rangeNotSatisfiable("Requested range not satisfiable"); -> { success: false, data: "Requested range not satisfiable" }
       */
      rangeNotSatisfiable<T = unknown>(data?: T): this;

      /**
       * Respond with 417-Expectation Failed status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.expectationFailed({ message: "Expectation could not be met" }); -> { success: false, data: { message: "Expectation could not be met" } }
       */
      expectationFailed<T = unknown>(data?: T): this;

      /**
       * Respond with 418-I'm a Teapot status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.imATeapot("Short and stout"); -> { success: false, data: "Short and stout" }
       */
      imATeapot<T = unknown>(data?: T): this;

      /**
       * Respond with 421-Misdirected Request status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.misdirectedRequest({ message: "Request misdirected" }); -> { success: false, data: { message: "Request misdirected" } }
       */
      misdirectedRequest<T = unknown>(data?: T): this;

      /**
       * Respond with 422-Unprocessable Entity status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.unprocessableEntity({ errors: [...] }); -> { success: false, data: { errors: [...] } }
       */
      unprocessableEntity<T = unknown>(data?: T): this;

      /**
       * Respond with 423-Locked status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.locked("Resource is locked"); -> { success: false, data: "Resource is locked" }
       */
      locked<T = unknown>(data?: T): this;

      /**
       * Respond with 424-Failed Dependency status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.failedDependency({ message: "Failed due to dependency" }); -> { success: false, data: { message: "Failed due to dependency" } }
       */
      failedDependency<T = unknown>(data?: T): this;

      /**
       * Respond with 425-Too Early status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.tooEarly("Request sent too early"); -> { success: false, data: "Request sent too early" }
       */
      tooEarly<T = unknown>(data?: T): this;

      /**
       * Respond with 426-Upgrade Required status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.upgradeRequired({ protocol: "TLS/1.3" }); -> { success: false, data: { protocol: "TLS/1.3" } }
       */
      upgradeRequired<T = unknown>(data?: T): this;

      /**
       * Respond with 428-Precondition Required status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.preconditionRequired({ message: "Precondition is required" }); -> { success: false, data: { message: "Precondition is required" } }
       */
      preconditionRequired<T = unknown>(data?: T): this;

      /**
       * Respond with 429-Too Many Requests status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.tooManyRequests("Rate limit exceeded"); -> { success: false, data: "Rate limit exceeded" }
       */
      tooManyRequests<T = unknown>(data?: T): this;

      /**
       * Respond with 431-Request Header Fields Too Large status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.requestHeaderFieldsTooLarge("Header fields too large"); -> { success: false, data: "Header fields too large" }
       */
      requestHeaderFieldsTooLarge<T = unknown>(data?: T): this;

      /**
       * Respond with 451-Unavailable For Legal Reasons status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.unavailableForLegalReasons({ reason: "Censorship" }); -> { success: false, data: { reason: "Censorship" } }
       */
      unavailableForLegalReasons<T = unknown>(data?: T): this;
    }
  }
}

export {};
