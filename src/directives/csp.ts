class CSPDirectives {
    public static readonly BASE_URI = 'base-uri';
    public static readonly DEFAULT_SRC = 'default-src';
    public static readonly CONNECT_SRC = 'connect-src';
    public static readonly PREFETCH_SRC = 'prefetch-src';

    public static readonly SCRIPT_SRC = 'script-src';
    public static readonly STYLE_SRC = 'style-src';
    public static readonly IMG_SRC = 'img-src';
    public static readonly FONT_SRC = 'font-src';
    public static readonly MEDIA_SRC = 'media-src';
    public static readonly OBJECT_SRC = 'object-src';
    public static readonly MANIFEST_SRC = 'manifest-src';
    public static readonly WORKER_SRC = 'worker-src';

    public static readonly FRAME_SRC = 'frame-src';

    /** @deprecated Use frame-src and worker-src instead */
    public static readonly CHILD_SRC = 'child-src';
    public static readonly FRAME_ANCESTORS = 'frame-ancestors';

    public static readonly SANDBOX = 'sandbox';
    public static readonly FORM_ACTION = 'form-action';
    public static readonly NAVIGATE_TO = 'navigate-to';
    public static readonly UPGRADE_INSECURE_REQUESTS = 'upgrade-insecure-requests';
    public static readonly BLOCK_ALL_MIXED_CONTENT = 'block-all-mixed-content';

    /** @deprecated Replaced by Referrer-Policy header. */
    public static readonly REFERRER = 'referrer';

    /** @deprecated Use report-to instead. */
    public static readonly REPORT_URI = 'report-uri';
    public static readonly REPORT_TO = 'report-to';

    /** @deprecated */
    public static readonly REQUIRE_SRI_FOR = 'require-sri-for';

    /** @deprecated */
    public static readonly PLUGIN_TYPES = 'plugin-types';
}

class CSPSources {
    public static readonly SELF = 'self';
    public static readonly NONE = 'none';
    public static readonly STRICT_DYNAMIC = 'strict-dynamic';
    public static readonly UNSAFE_INLINE = 'unsafe-inline';
    public static readonly UNSAFE_EVAL = 'unsafe-eval';
    public static readonly UNSAFE_HASHES = 'unsafe-hashes';
    public static readonly WASM_UNSAFE_EVAL = 'wasm-unsafe-eval';
    public static readonly REPORT_SAMPLE = 'report-sample';

    public static readonly SELF_QTD = "'self'";
    public static readonly NONE_QTD = "'none'";
    public static readonly STRICT_DYNAMIC_QTD = "'strict-dynamic'";
    public static readonly UNSAFE_INLINE_QTD = "'unsafe-inline'";
    public static readonly UNSAFE_EVAL_QTD = "'unsafe-eval'";
    public static readonly UNSAFE_HASHES_QTD = "'unsafe-hashes'";
    public static readonly WASM_UNSAFE_EVAL_QTD = "'wasm-unsafe-eval'";
    public static readonly REPORT_SAMPLE_QTD = "'report-sample'";

    public static nonce(value: string): string {
        return `'nonce-${value}'`;
    }

    public static sha256(value: string): string {
        return `'sha256-${value}'`;
    }

    public static sha384(value: string): string {
        return `'sha384-${value}'`;
    }

    public static sha512(value: string): string {
        return `'sha512-${value}'`;
    }
}

export {CSPDirectives, CSPSources};
