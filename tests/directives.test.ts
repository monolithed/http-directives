import {
    describe,
    test,
    expect
} from 'vitest';

import {
    Headers,
    MimeTypes,
    ContentEncodings,
    Charsets,
    StatusCodes,
    CacheControl,
    Credentials,
    CspDirectives,
    CspSources,
    Methods,
    RequestModes,
    DNT,
    Protocols
} from '../src/index.ts';

describe('Directives', async () => {
    test('Constants', async () => {
        expect(Headers.STRICT_TRANSPORT_SECURITY).toBe('Strict-Transport-Security');
        expect(MimeTypes.APPLICATION_JAVASCRIPT).toBe('application/javascript');
        expect(ContentEncodings.GZIP).toBe('gzip');
        expect(Charsets.UTF_8).toBe('UTF-8');
        expect(StatusCodes.OK).toBe(200);
        expect(Credentials.SAME_ORIGIN).toBe('same-origin');
        expect(CacheControl.MAX_AGE).toBe('max-age');
        expect(CspDirectives.BASE_URI).toBe('base-uri');
        expect(CspSources.SELF).toBe('self');
        expect(Methods.POST).toBe('POST');
        expect(RequestModes.NO_CORS).toBe('no-cors');
        expect(DNT.NOT_TRACKING).toBe('N');
        expect(Protocols.HTTPS).toBe('https:');
    });

    test('CSP functions', async () => {
        expect(CspSources.nonce('abc123')).toBe("'nonce-abc123'");
        expect(CspSources.sha256('hash')).toBe("'sha256-hash'");
        expect(CspSources.sha384('hash')).toBe("'sha384-hash'");
        expect(CspSources.sha512('hash')).toBe("'sha512-hash'");
    });

    test('Extensibility', async () => {
        class CustomHeaders extends Headers {
            public static readonly CUSTOM_HEADER = 'custom-header';
        }

        expect(CustomHeaders.CUSTOM_HEADER).toBe('custom-header');
    });
});
