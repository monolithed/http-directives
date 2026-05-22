# http-directives

A TypeScript-friendly package that provides strongly-typed constants for common HTTP headers, directives, status codes,
MIME types, caching policies, CSP rules, and more. <br/>
Say goodbye to string typos and make your HTTP code safer, cleaner, and more maintainable.


### Installation

```sh
npm i http-directives
```


### What’s included

The following categories of constants are included in this package:

| Category              | Constants examples                                                                               |
|-----------------------|--------------------------------------------------------------------------------------------------|
| **HTTP Status Codes** | `OK`, `NOT_FOUND`, `INTERNAL_SERVER_ERROR`, etc.                                                 |
| **HTTP Methods**      | `GET`, `POST`, `PUT`, `DELETE`, etc.                                                             |
| **HTTP Headers**      | `CONTENT_TYPE`, `CACHE_CONTROL`, `STRICT_TRANSPORT_SECURITY`, `CONTENT_SECURITY_POLICY`, etc.    |
| **MIME Types**        | `APPLICATION_JSON`, `APPLICATION_JAVASCRIPT`, `APPLICATION_ZIP`, `TEXT_PLAIN`, `TEXT_HTML`, etc. |
| **Content Encodings** | `GZIP`, `BR`, etc.                                                                               |
| **Cache Control**     | `MAX_AGE`, `NO_CACHE`, `PRIVATE`, etc.                                                           |
| **Charsets**          | `UTF-8`, `UTF-16`, `ISO-8859-1`, etc.                                                            |
| **CORS**              | `SAME_ORIGIN`, `NO_CORS`, etc.                                                                  |
| **CSP Directives**    | `SCRIPT_SRC`, `STYLE_SRC`, etc.                                                                  |
| **CSP Sources**       | `SELF`, `UNSAFE_INLINE`, `nonce()`, `sha256()`, etc.                                             |
| **DNT**               | `!`, `?`, `N`, `T`, etc.                                                                         |
| **Protocols**         | `HTTP`, `HTTPS`, `SSH`, `WSS`, `MQTT`,  etc.                                                     |



### Usage example

```tsx
import {
    ContentEncodings,
    Charsets,
    DNT,
    Headers,
    StatusCodes,
    CacheControl,
    Credentials,
    CspDirectives,
    CspSources,
    Methods,
    MimeTypes,
    Protocols,
    RequestModes,
} from 'http-directives';

Headers.STRICT_TRANSPORT_SECURITY; // "Strict-Transport-Security"
MimeTypes.APPLICATION_JAVASCRIPT;  // "application/javascript"
ContentEncodings.GZIP;             // "gzip"
Charsets.UTF_8;                    // "UTF-8"
StatusCodes.OK;                    // 200
CacheControl.MAX_AGE;              // "max-age"
CspDirectives.BASE_URI;            // "base-uri"
CspSources.SELF;                   // "self"
CspSources.SELF_QTD;               // "'self'"
Credentials.SAME_ORIGIN;           // "same-origin"
Methods.POST;                      // "POST"
RequestModes.NO_CORS;              // "no-cors"
DNT.NOT_TRACKING;                  // "N"
Protocols.HTTPS;                   // "https:"
```

Additionally, exported CSP utility functions:

```ts
import {CSPSources} from 'http-directives';

CSPSources.nonce('abc123');        // "'nonce-abc123'"
CSPSources.sha256('hash');         // "'sha256-hash'"
CSPSources.sha384('hash');         // "'sha384-hash'"
CSPSources.sha512('hash');         // "'sha512-hash'"
```


### Extensible

Define and reuse your own constants with full autocompletion and type safety:

```ts
import {Headers} from 'http-directives';

class CustomHeaders extends Headers {
    public static readonly CUSTOM_HEADER = 'custom-header';
}

CustomHeaders.CUSTOM_HEADER; // "custom-header"
```


### Benefits

* **Type-safe**: Avoid typos in locales
* **Autocompletion**: Full IDE support with TypeScript
* **Zero dependencies**: Lightweight and fast
* **Compatible**: Supports both ESM and CJS
* **Extensible**: Easily add custom directives and headers
* 
### Contributing


Please motivate yourself to submit a PR.


### License

MIT
