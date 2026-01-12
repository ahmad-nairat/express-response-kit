declare global {
  namespace Express {
    interface Response {
      /**
       * Respond with 200-OK status code
       * the response will follow the structure { success: true, data: passedData }
       * @example
       * res.ok({ message: "Success" }); -> { success: true, data: { message: "Success" } }
       * res.ok("All good!"); -> { success: true, data: "All good!" }
       */
      ok<T = unknown>(data?: T): this;

      /**
       * Respond with 201-Created status code
       * the response will follow the structure { success: true, data: passedData }
       * @example
       * res.created({ id: 1, name: "Item" }); -> { success: true, data: { id: 1, name: "Item" } }
       */
      created<T = unknown>(data?: T): this;

      /**
       * Respond with 202-Accepted status code
       * the response will follow the structure { success: true, data: passedData }
       * @example
       * res.accepted({ taskId: 123 }); -> { success: true, data: { taskId: 123 } }
       */
      accepted<T = unknown>(data?: T): this;

      /**
       * Respond with 203-Non-Authoritative Information status code
       * the response will follow the structure { success: true, data: passedData }
       * @example
       * res.nonAuthoritativeInformation({ info: "Some info" }); -> { success: true, data: { info: "Some info" } }
       */
      nonAuthoritativeInformation<T = unknown>(data?: T): this;

      /**
       * Respond with 204-No Content status code
       * @example
       * res.noContent(); // under the hood -> res.status(204).send();
       */
      noContent(): this;

      /**
       * Respond with 205-Reset Content status code
       * @example
       * res.resetContent(); // under the hood -> res.status(205).send();
       */
      resetContent(): this;

      /**
       * Respond with 206-Partial Content status code
       * the response will follow the structure { success: true, data: passedData }
       * @example
       * res.partialContent({ chunk: "data" }); -> { success: true, data: { chunk: "data" } }
       */
      partialContent<T = unknown>(data?: T): this;

      /**
       * Respond with 207-Multi-Status status code
       * the response will follow the structure { success: true, data: passedData
       * @example
       * res.multiStatus([{ item: 1 }, { item: 2 }]); -> { success: true, data: [{ item: 1 }, { item: 2 }] }
       */
      multiStatus<T = unknown>(data?: T): this;

      /**
       * Respond with 208-Already Reported status code
       * the response will follow the structure { success: true, data: passedData }
       * @example
       * res.alreadyReported([{ item: 1 }, { item: 2 }]); -> { success: true, data: [{ item: 1 }, { item: 2 }] }
       */
      alreadyReported<T = unknown>(data?: T): this;

      /**
       * Respond with 226-IM Used status code
       * the response will follow the structure { success: true, data: passedData }
       * @example
       * res.imUsed({ resource: "cached version" }); -> { success: true, data: { resource: "cached version" } }
       */
      imUsed<T = unknown>(data?: T): this;
    }
  }
}

export {};
