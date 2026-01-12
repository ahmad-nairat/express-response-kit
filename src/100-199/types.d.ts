import "express";

declare global {
  namespace Express {
    interface Response {
      /**
       * Respond with 100-Continue status code
       * the response will follow the structure { success: true, data: passedData }
       * @example
       * res.continue([{ task: "task1" }, { task: "task2" }]); -> { success: true, data: [{ task: "task1" }, { task: "task2" }] }
       */
      continue<T = unknown>(data?: T): this;

      /**
       * Respond with 101-Switching Protocols status code
       * the response will follow the structure { success: true, data: passedData }
       * @example
       * res.switchingProtocols([{ task: "task1" }, { task: "task2" }]); -> { success: true, data: [{ task: "task1" }, { task: "task2" }] }
       */
      switchingProtocols<T = unknown>(data?: T): this;

      /**
       * Respond with 102-Processing status code
       * the response will follow the structure { success: true, data: passedData }
       * @example
       * res.processing([{ task: "task1" }, { task: "task2" }]); -> { success: true, data: [{ task: "task1" }, { task: "task2" }] }
       */
      processing<T = unknown>(data?: T): this;

      /**
       * Respond with 103-Early Hints status code
       * the response will follow the structure { success: true, data: passedData }
       * @example
       * res.earlyHints([{ task: "task1" }, { task: "task2" }]); -> { success: true, data: [{ task: "task1" }, { task: "task2" }] }
       */
      earlyHints<T = unknown>(data?: T): this;
    }
  }
}

export {};
