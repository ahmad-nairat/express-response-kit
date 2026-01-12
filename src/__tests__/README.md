# Express Response Kit - Test Suite

## Overview

Comprehensive Jest test suite for the `express-response-kit` library using SuperTest for in-memory Express testing.

## Test Coverage

### Total Tests: 80

- **Method Discovery**: 2 tests
- **Helper Method Tests**: 63 tests (one for each HTTP status helper)
- **Data Normalization**: 6 tests
- **Success Flag**: 4 tests
- **Deprecated Methods**: 2 tests
- **Edge Cases**: 3 tests

## Test Structure

### 1. Method Discovery

- Automatically discovers all custom response helper methods
- Filters out native Express and Node.js HTTP/Stream methods
- Validates that all discovered methods have metadata mappings

### 2. Helper Method Tests

Tests all 63 custom response helper methods across HTTP status categories:

- **1xx Informational** (4 methods): `continue`, `switchingProtocols`, `processing`, `earlyHints`
- **2xx Success** (10 methods): `ok`, `created`, `accepted`, `nonAuthoritativeInformation`, `noContent`, `resetContent`, `partialContent`, `multiStatus`, `alreadyReported`, `imUsed`
- **3xx Redirection** (9 methods): `multipleChoices`, `movedPermanently`, `found`, `seeOther`, `notModified`, `useProxy`, `switchProxy`, `temporaryRedirect`, `permanentRedirect`
- **4xx Client Error** (22 methods): `badRequest`, `unauthorized`, `paymentRequired`, `forbidden`, `notFound`, etc.
- **5xx Server Error** (11 methods): `internalServerError`, `notImplemented`, `badGateway`, `serviceUnavailable`, `gatewayTimeout`, etc.

Each test verifies:

- Correct HTTP status code
- Response body structure (for JSON responses)
- `success` flag (true for 1xx/2xx, false for 4xx/5xx)
- Data normalization
- Headers (for redirect responses)

### 3. Data Normalization Tests

Validates the `normalize()` utility function:

- `undefined` → `null`
- Primitives (string, number, boolean) → `{ value: primitive }`
- Objects/Arrays → unchanged

### 4. Success Flag Tests

Ensures correct `success` field in responses:

- 1xx responses: `success: true`
- 2xx responses: `success: true`
- 4xx responses: `success: false`
- 5xx responses: `success: false`

### 5. Deprecated Method Tests

Tests deprecated HTTP methods still work:

- `useProxy()` - HTTP 305
- `switchProxy()` - HTTP 306

### 6. Edge Case Tests

- Null data handling
- Empty objects
- Nested objects

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Key Features

✅ **No hardcoded ranges** - Dynamically discovers all methods  
✅ **No real HTTP server** - Uses SuperTest for in-memory testing  
✅ **Comprehensive coverage** - Every method tested  
✅ **Automatic validation** - Ensures metadata exists for all methods  
✅ **Clean & readable** - One test per method

## Test Output Example

```
Express Response Helper Methods
  Method Discovery
    ✓ should discover all custom helper methods (22 ms)
    ✓ should have metadata for all discovered methods (1 ms)
  Helper Method Tests
    ✓ ok() should return 200 with JSON body (5 ms)
    ✓ created() should return 201 with JSON body (10 ms)
    ✓ badRequest() should return 400 with JSON body (31 ms)
    ...
  Data Normalization
    ✓ should normalize undefined to null in data field (6 ms)
    ...

Test Suites: 1 passed, 1 total
Tests:       80 passed, 80 total
```
