import { Response } from "express";
import "./types.d";
import { HttpRedirectionStatus } from "../enum";

export const patch3xx = (res: Response) => {
  res.multipleChoices = function (url: string) {
    return this.redirect(HttpRedirectionStatus.MULTIPLE_CHOICES, url);
  };

  res.movedPermanently = function (url: string) {
    return this.redirect(HttpRedirectionStatus.MOVED_PERMANENTLY, url);
  };

  res.found = function (url: string) {
    return this.redirect(HttpRedirectionStatus.FOUND, url);
  };

  res.seeOther = function (url: string) {
    return this.redirect(HttpRedirectionStatus.SEE_OTHER, url);
  };

  res.notModified = function () {
    return this.sendStatus(HttpRedirectionStatus.NOT_MODIFIED);
  };

  res.useProxy = function (url: string, _data?: unknown) {
    if (process.env.NODE_ENV !== "production" && console?.warn) {
      console.warn(
        "Warning: HTTP 305 Use Proxy is deprecated and should be avoided."
      );
    }

    return this.redirect(HttpRedirectionStatus.USE_PROXY, url);
  };

  res.switchProxy = function (url: string, _data?: unknown) {
    if (process.env.NODE_ENV !== "production" && console?.warn) {
      console.warn(
        "Warning: HTTP 306 Switch Proxy is deprecated and should be avoided."
      );
    }

    return this.redirect(HttpRedirectionStatus.SWITCH_PROXY, url);
  };

  res.temporaryRedirect = function (url: string) {
    return this.redirect(HttpRedirectionStatus.TEMPORARY_REDIRECT, url);
  };

  res.permanentRedirect = function (url: string) {
    return this.redirect(HttpRedirectionStatus.PERMANENT_REDIRECT, url);
  };
};
