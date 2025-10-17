class CacheControl {
    public static readonly MAX_AGE = 'max-age';
    public static readonly S_MAXAGE = 's-maxage';
    public static readonly MIN_FRESH = 'min-fresh';
    public static readonly MAX_STALE = 'max-stale';

    public static readonly PUBLIC = 'public';
    public static readonly PRIVATE = 'private';
    public static readonly NO_STORE = 'no-store';
    public static readonly NO_CACHE = 'no-cache';
    public static readonly MUST_REVALIDATE = 'must-revalidate';

    public static readonly IMMUTABLE = 'immutable';
    public static readonly NO_TRANSFORM = 'no-transform';
    public static readonly ONLY_IF_CACHED = 'only-if-cached';
    public static readonly PROXY_REVALIDATE = 'proxy-revalidate';
    public static readonly STALE_IF_ERROR = 'stale-if-error';
    public static readonly STALE_WHILE_REVALIDATE = 'stale-while-revalidate';
}

export {CacheControl};
