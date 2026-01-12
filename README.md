<p align="center">
  <img width="607" height="227" alt="express-response-kit logo" src="https://github.com/user-attachments/assets/f36b31b2-ea7b-44bc-a1a2-787232b35149" />
</p>

# express-response-kit
[![npm version](https://img.shields.io/npm/v/express-response-kit)](https://www.npmjs.com/package/express-response-kit)
[![Downloads](https://img.shields.io/npm/dt/express-response-kit)](https://www.npmjs.com/package/express-response-kit)
[![License](https://img.shields.io/github/license/ahmad-nairat/express-response-kit)](LICENSE)
[![Node](https://img.shields.io/node/v/express-response-kit)](https://nodejs.org)
[![Build](https://github.com/ahmad-nairat/express-response-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/ahmad-nairat/express-response-kit/actions/workflows/ci.yml)
[![Coverage](https://codecov.io/gh/ahmad-nairat/express-response-kit/branch/main/graph/badge.svg)](https://codecov.io/gh/ahmad-nairat/express-response-kit)


A lightweight Express.js extension that adds **semantic HTTP response helpers** and enforces a **consistent response structure** across your API.

`express-response-kit` augments `Express.Response` with intuitive methods like `res.ok()`, `res.badRequest()`, `res.internalServerError()`, etc., while automatically normalizing response bodies for success and error responses.


## ✨ Features

- ✅ Semantic response helpers for **all HTTP status codes**
- ✅ Consistent response structure for **1xx, 2xx, 4xx, 5xx**
- ✅ No middleware required
- ✅ No runtime configuration
- ✅ TypeScript-first (full type augmentation)
- ✅ Deprecated HTTP statuses are supported (with warnings)
- ✅ Zero breaking changes to Express behavior

## 📦 Installation

```bash
npm install express-response-kit
```

or

```bash
pnpm add express-response-kit
```


## 🚀 Usage

Import the package **once** in your app entry point:

```ts
import "express-response-kit";
```

All helpers are now available on `res`.


## 🧱 Default Response Structure (v1)

For the following HTTP status ranges:

- **1xx** – Informational
- **2xx** – Success
- **4xx** – Client errors
- **5xx** – Server errors

responses are automatically wrapped using this structure:

```ts
{
  success: boolean;
  data: unknown;
}
```


## ✅ Success Responses (1xx, 2xx)

- `success` is always `true`
- `data` is the value passed to the method
- If no value is passed, `data` is `null`

### Examples

| Code | Result |
|------|--------|
| `res.ok("hey")` | `{ "success": true, "data": "hey" }` |
| `res.ok({ msg: "hey" })` | `{ "success": true, "data": { "msg": "hey" } }` |
| `res.ok()` | `{ "success": true, "data": null }` |
| `res.created({ id: 1 })` | `{ "success": true, "data": { "id": 1 } }` |


## ❌ Error Responses (4xx, 5xx)

- `success` is always `false`
- `data` is the error payload (if provided)
- If no payload is provided, `data` is `null`

### Examples

| Code | Result |
|------|--------|
| `res.badRequest("Invalid input")` | `{ "success": false, "data": "Invalid input" }` |
| `res.notFound()` | `{ "success": false, "data": null }` |
| `res.internalServerError({ reason: "DB down" })` | `{ "success": false, "data": { "reason": "DB down" } }` |


## 🔁 Redirection Responses (3xx)

Redirection responses **do not follow the `{ success, data }` structure**.

They rely on standard HTTP semantics and the `Location` header.

### Examples

| Code | Behavior |
|------|----------|
| `res.movedPermanently("/new-url")` | `301` + `Location: /new-url` |
| `res.found("/login")` | `302` + redirect |
| `res.temporaryRedirect("/retry")` | `307` + redirect |


## ⚠️ Deprecated Status Codes

Some HTTP status codes are officially deprecated but are still supported to **respect developer intent**.

Examples:
- `305 Use Proxy`
- `306 Switch Proxy`

These methods:
- Are clearly marked as `@deprecated`
- Still work correctly
- Are not blocked or altered

```ts
res.useProxy("http://proxy.example.com");
```


## 🧠 Design Philosophy

- Keep controllers clean and expressive
- Avoid repeating response boilerplate
- Enforce a predictable API contract
- Respect HTTP standards without being opinionated
- Extend Express without changing its core behavior


## 🧪 Testing

- Uses **Jest + Supertest**
- Runs against an in-memory Express app
- No real network calls
- All response helpers are covered

```bash
npm test
```


## 🔮 Roadmap

### v2 (planned)

- Configurable response structure
- paginated response helpers (e.g. res.paginated(data))


## 📄 License

MIT © 2026
