import { HttpSuccessStatus } from "../enum";
import { normalize } from "../utils";
import "./index.d";
import { Response } from "express";

export function patch2xx(res: Response) {
  const getResBody = (data: unknown) => ({
    success: true,
    data: normalize(data),
  });

  res.ok = function (data?: unknown) {
    return this.status(HttpSuccessStatus.OK).json(getResBody(data));
  };

  res.created = function (data?: unknown) {
    return this.status(HttpSuccessStatus.CREATED).json(getResBody(data));
  };

  res.accepted = function (data?: unknown) {
    return this.status(HttpSuccessStatus.ACCEPTED).json(getResBody(data));
  };

  res.nonAuthoritativeInformation = function (data?: unknown) {
    return this.status(HttpSuccessStatus.NON_AUTHORITATIVE_INFORMATION).json(
      getResBody(data)
    );
  };

  res.noContent = function () {
    return this.status(HttpSuccessStatus.NO_CONTENT).send();
  };

  res.resetContent = function () {
    return this.status(HttpSuccessStatus.RESET_CONTENT).send();
  };

  res.partialContent = function (data?: unknown) {
    return this.status(HttpSuccessStatus.PARTIAL_CONTENT).json(
      getResBody(data)
    );
  };

  res.multiStatus = function (data?: unknown) {
    return this.status(HttpSuccessStatus.MULTI_STATUS).json(getResBody(data));
  };

  res.alreadyReported = function (data?: unknown) {
    return this.status(HttpSuccessStatus.ALREADY_REPORTED).json(
      getResBody(data)
    );
  };

  res.imUsed = function (data?: unknown) {
    return this.status(HttpSuccessStatus.IM_USED).json(getResBody(data));
  };
}
