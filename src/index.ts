import "./types.d"

// src/index.ts
import express from "express";

// Import all patch functions
import { patch1xx } from "./100-199";
import { patch2xx } from "./200-299";
import { patch3xx } from "./300-399";
import { patch4xx } from "./400-499";
import { patch5xx } from "./500-599";

/**
 * Extend Express Response prototype with all custom helper methods
 * Call this once in your app before using custom response methods.
 */
export function extendResponse() {
  const res = express.response as any & { _patched?: boolean };

  if (res._patched) return;
  res._patched = true;

  patch1xx(res);
  patch2xx(res);
  patch3xx(res);
  patch4xx(res);
  patch5xx(res);
}

extendResponse();

export {};
