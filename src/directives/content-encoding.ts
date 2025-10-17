class ContentEncoding {
    public static readonly AES128GCM = 'aes128gcm';
    public static readonly BR = 'br';
    public static readonly DEFLATE = 'deflate';
    public static readonly GZIP = 'gzip';
    public static readonly IDENTITY = 'identity';

    /** @deprecated */
    public static readonly COMPRESS = 'compress';

    /** @deprecated */
    public static readonly PACK200_GZIP = 'pack200-gzip';

    /** @deprecated */
    public static readonly SDCH = 'sdch';

    /** @deprecated */
    public static readonly X_COMPRESS = 'x-compress';

    /** @deprecated */
    public static readonly X_GZIP = 'x-gzip';
}

export {ContentEncoding};
