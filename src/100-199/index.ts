import { HttpInfoStatus } from "../enum";
import { normalize } from "../utils";
import "./index.d";
import { Response } from "express";

export const patch1xx = (res: Response) => {
  const getResBody = (data: unknown) => ({
    success: true,
    data: normalize(data),
  });
  res.continue = (data: unknown) => {
    return res.status(HttpInfoStatus.CONTINUE).json(getResBody(data));
  };

  res.switchingProtocols = (data: unknown) => {
    return res
      .status(HttpInfoStatus.SWITCHING_PROTOCOLS)
      .json(getResBody(data));
  };

  res.processing = (data: unknown) => {
    return res.status(HttpInfoStatus.PROCESSING).json(getResBody(data));
  };

  res.earlyHints = (data: unknown) => {
    return res.status(HttpInfoStatus.EARLY_HINTS).json(getResBody(data));
  };
};
