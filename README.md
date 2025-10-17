### http-directives

A TypeScript-friendly package that provides strongly-typed constants for common HTTP headers, directives, status codes,
MIME types, caching policies, CSP rules, and more. <br/>
Say goodbye to string typos and make your HTTP code safer, cleaner, and more maintainable.

### Installation

```sh
npm i http-directives
```

### What’s included

The following categories of constants are included in this package:

| Category              | Constants examples                                                                                 |
|-----------------------|----------------------------------------------------------------------------------------------------|
| **HTTP Status Codes** | `OK`, `NOT_FOUND`, `INTERNAL_SERVER_ERROR`, etc.                                                   |
| **HTTP Methods**      | `GET`, `POST`, `PUT`, `DELETE`, etc.                                                               |
| **HTTP Headers**      | `CONTENT_TYPE`, `CACHE_CONTROL`, `STRICT_TRANSPORT_SECURITY`, `CONTENT_SECURITY_POLICY`, etc.      |
| **MIME Types**        | `APPLICATION_JSON`, `APPLICATION_JAVASCRIPT`, `APPLICATION_ZIP`, `TEXT_PLAIN`, `TEXT_HTML`, etc.   |
| **Content Encoding**  | `GZIP`, `BR`, etc.                                                                                 |
| **Cache Control**     | `MAX_AGE`, `NO_CACHE`, `PRIVATE`, etc.                                                             |
| **CSP Directives**    | `SCRIPT_SRC`, `STYLE_SRC`, etc.                                                                    |
| **CSP Sources**       | `SELF`, `UNSAFE_INLINE`, `NONCE()`, etc.                                                           |
| **DNT**               | `ENABLED`, `DISABLED`, etc.                                                                        |

### Usage example

```tsx
import {
    Headers,
    MimeTypes,
    ContentEncoding,
    StatusCodes,
    CacheControl,
    CSPDirectives,
    CSPSources,
    Methods,
    DNT
} from 'http-directives';

Headers.STRICT_TRANSPORT_SECURITY // "Strict-Transport-Security"
MimeTypes.APPLICATION_JAVASCRIPT  // "application/javascript"
ContentEncoding.GZIP              // "gzip"
StatusCodes.OK                    // 200
CacheControl.MAX_AGE              // "max-age"
CSPDirectives.UNSAFE_EVAL         // "unsafe-eval"
CSPSources.SELF                   // "self"
Methods.POST                      // "POST"
DNT.ENABLED                       // "1"
```

Additionally, exported CSP utility functions:

```ts
import {CSPSources} from 'http-directives';

CSPSources.nonce('abc123')        // "'nonce-abc123'"
CSPSources.sha256('hash')         // "'sha256-hash'"
CSPSources.sha384('hash')         // "'sha384-hash'"
CSPSources.sha512('hash')         // "'sha512-hash'"
```

### Extensible

Define and reuse your own constants with full autocompletion and type safety:

```ts
import {Headers} from 'http-directives';

class YourHeaders extends Headers {
    public static readonly YOUR_CUSTOM_HEADER = 'custom-header';
}

YourHeaders.YOUR_CUSTOM_HEADER    // "custom-header"
```

### Benefits

* **Safe**: Avoid typos in strings and headers
* **Autocompletion**: Full IDE support with TypeScript
* **Up-to-date**: Includes modern headers, directives, and encodings
* **Zero dependencies**: Lightweight and fast
* **Compatible**: Supports both ESM and CJS
* **Extensible**: Easily add custom directives and headers

### Contributing

Please motivate yourself to submit a PR.

### License

MIT
