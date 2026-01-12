import "./types.d";
import { Response } from "express";
import { HttpServerErrorStatus } from "../enum";
import { normalize } from "../utils";

export const patch5xx = (res: Response) => {
  const getResBody = (data: unknown) => ({
    success: false,
    data: normalize(data),
  });

  res.internalServerError = function (data?: unknown) {
    return this.status(HttpServerErrorStatus.INTERNAL_SERVER_ERROR).json(
      getResBody(data)
    );
  };

  res.notImplemented = function (data?: unknown) {
    return this.status(HttpServerErrorStatus.NOT_IMPLEMENTED).json(
      getResBody(data)
    );
  };

  res.badGateway = function (data?: unknown) {
    return this.status(HttpServerErrorStatus.BAD_GATEWAY).json(
      getResBody(data)
    );
  };

  res.serviceUnavailable = function (data?: unknown) {
    return this.status(HttpServerErrorStatus.SERVICE_UNAVAILABLE).json(
      getResBody(data)
    );
  };

  res.gatewayTimeout = function (data?: unknown) {
    return this.status(HttpServerErrorStatus.GATEWAY_TIMEOUT).json(
      getResBody(data)
    );
  };

  res.httpVersionNotSupported = function (data?: unknown) {
    return this.status(HttpServerErrorStatus.HTTP_VERSION_NOT_SUPPORTED).json(
      getResBody(data)
    );
  };

  res.variantAlsoNegotiates = function (data?: unknown) {
    return this.status(HttpServerErrorStatus.VARIANT_ALSO_NEGOTIATES).json(
      getResBody(data)
    );
  };

  res.insufficientStorage = function (data?: unknown) {
    return this.status(HttpServerErrorStatus.INSUFFICIENT_STORAGE).json(
      getResBody(data)
    );
  };

  res.loopDetected = function (data?: unknown) {
    return this.status(HttpServerErrorStatus.LOOP_DETECTED).json(
      getResBody(data)
    );
  };

  res.notExtended = function (data?: unknown) {
    return this.status(HttpServerErrorStatus.NOT_EXTENDED).json(
      getResBody(data)
    );
  };

  res.networkAuthenticationRequired = function (data?: unknown) {
    return this.status(
      HttpServerErrorStatus.NETWORK_AUTHENTICATION_REQUIRED
    ).json(getResBody(data));
  };
};
