import "./index.d";
import { Response } from "express";
import { HttpClientErrorStatus } from "../enum";
import { normalize } from "../utils";

export const patch4xx = (res: Response) => {
  const getResBody = (data: unknown) => ({
    success: false,
    data: normalize(data),
  });

  res.badRequest = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.BAD_REQUEST).json(
      getResBody(data)
    );
  };

  res.unauthorized = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.UNAUTHORIZED).json(
      getResBody(data)
    );
  };

  res.paymentRequired = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.PAYMENT_REQUIRED).json(
      getResBody(data)
    );
  };

  res.forbidden = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.FORBIDDEN).json(getResBody(data));
  };

  res.notFound = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.NOT_FOUND).json(getResBody(data));
  };

  res.methodNotAllowed = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.METHOD_NOT_ALLOWED).json(
      getResBody(data)
    );
  };

  res.notAcceptable = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.NOT_ACCEPTABLE).json(
      getResBody(data)
    );
  };

  res.proxyAuthenticationRequired = function (data?: unknown) {
    return this.status(
      HttpClientErrorStatus.PROXY_AUTHENTICATION_REQUIRED
    ).json(getResBody(data));
  };

  res.requestTimeout = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.REQUEST_TIMEOUT).json(
      getResBody(data)
    );
  };

  res.conflict = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.CONFLICT).json(getResBody(data));
  };

  res.gone = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.GONE).json(getResBody(data));
  };

  res.lengthRequired = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.LENGTH_REQUIRED).json(
      getResBody(data)
    );
  };

  res.preconditionFailed = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.PRECONDITION_FAILED).json(
      getResBody(data)
    );
  };

  res.contentTooLarge = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.CONTENT_TOO_LARGE).json(
      getResBody(data)
    );
  };

  res.uriTooLong = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.URI_TOO_LONG).json(
      getResBody(data)
    );
  };

  res.unsupportedMediaType = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.UNSUPPORTED_MEDIA_TYPE).json(
      getResBody(data)
    );
  };

  res.rangeNotSatisfiable = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.RANGE_NOT_SATISFIABLE).json(
      getResBody(data)
    );
  };

  res.expectationFailed = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.EXPECTATION_FAILED).json(
      getResBody(data)
    );
  };

  res.imATeapot = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.IM_A_TEAPOT).json(
      getResBody(data)
    );
  };

  res.misdirectedRequest = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.MISDIRECTED_REQUEST).json(
      getResBody(data)
    );
  };

  res.unprocessableEntity = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.UNPROCESSABLE_ENTITY).json(
      getResBody(data)
    );
  };

  res.locked = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.LOCKED).json(getResBody(data));
  };

  res.failedDependency = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.FAILED_DEPENDENCY).json(
      getResBody(data)
    );
  };

  res.tooEarly = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.TOO_EARLY).json(getResBody(data));
  };

  res.upgradeRequired = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.UPGRADE_REQUIRED).json(
      getResBody(data)
    );
  };

  res.preconditionRequired = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.PRECONDITION_REQUIRED).json(
      getResBody(data)
    );
  };

  res.tooManyRequests = function (data?: unknown) {
    return this.status(HttpClientErrorStatus.TOO_MANY_REQUESTS).json(
      getResBody(data)
    );
  };

  res.requestHeaderFieldsTooLarge = function (data?: unknown) {
    return this.status(
      HttpClientErrorStatus.REQUEST_HEADER_FIELDS_TOO_LARGE
    ).json(getResBody(data));
  };

  res.unavailableForLegalReasons = function (data?: unknown) {
    return this.status(
      HttpClientErrorStatus.UNAVAILABLE_FOR_LEGAL_REASONS
    ).json(getResBody(data));
  };
};
