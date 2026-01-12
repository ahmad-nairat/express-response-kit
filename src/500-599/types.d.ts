declare global {
  namespace Express {
    interface Response {
      /**
       * Respond with 500-Internal Server Error status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.internalServerError({ error: "Something went wrong" }); -> { success: false, data: { error: "Something went wrong" } }
       */
      internalServerError<T = unknown>(data?: T): this;

      /**
       * Respond with 501-Not Implemented status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.notImplemented("Feature not implemented"); -> { success: false, data: "Feature not implemented" }
       */
      notImplemented<T = unknown>(data?: T): this;

      /**
       * Respond with 502-Bad Gateway status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.badGateway({ message: "Upstream server error" }); -> { success: false, data: { message: "Upstream server error" } }
       */
      badGateway<T = unknown>(data?: T): this;

      /**
       * Respond with 503-Service Unavailable status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.serviceUnavailable("Service temporarily unavailable"); -> { success: false, data: "Service temporarily unavailable" }
       */
      serviceUnavailable<T = unknown>(data?: T): this;

      /**
       * Respond with 504-Gateway Timeout status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.gatewayTimeout({ message: "Gateway timeout" }); -> { success: false, data: { message: "Gateway timeout" } }
       */
      gatewayTimeout<T = unknown>(data?: T): this;

      /**
       * Respond with 505-HTTP Version Not Supported status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.httpVersionNotSupported("HTTP version not supported"); -> { success: false, data: "HTTP version not supported" }
       */
      httpVersionNotSupported<T = unknown>(data?: T): this;

      /**
       * Respond with 506-Variant Also Negotiates status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.variantAlsoNegotiates({ message: "Variant negotiation issue" }); -> { success: false, data: { message: "Variant negotiation issue" } }
       */
      variantAlsoNegotiates<T = unknown>(data?: T): this;

      /**
       * Respond with 507-Insufficient Storage status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.insufficientStorage("Not enough storage"); -> { success: false, data: "Not enough storage" }
       */
      insufficientStorage<T = unknown>(data?: T): this;

      /**
       * Respond with 508-Loop Detected status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.loopDetected({ message: "Infinite loop detected" }); -> { success: false, data: { message: "Infinite loop detected" } }
       */
      loopDetected<T = unknown>(data?: T): this;

      /**
       * Respond with 510-Not Extended status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.notExtended("Further extensions required"); -> { success: false, data: "Further extensions required" }
       */
      notExtended<T = unknown>(data?: T): this;

      /**
       * Respond with 511-Network Authentication Required status code
       * the response will follow the structure { success: false, data: passedData }
       * @example
       * res.networkAuthenticationRequired({ message: "Network auth required" }); -> { success: false, data: { message: "Network auth required" } }
       */
      networkAuthenticationRequired<T = unknown>(data?: T): this;
    }
  }
}

export {};