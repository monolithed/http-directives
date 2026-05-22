class Credentials {
    public static readonly INCLUDE = 'include';
    public static readonly SAME_ORIGIN = 'same-origin';
    public static readonly OMIT = 'omit';
}

class RequestModes {
    public static readonly CORS = 'cors';
    public static readonly SAME_ORIGIN = 'same-origin';
    public static readonly NO_CORS = 'no-cors';
    public static readonly NAVIGATE = 'navigate';
}

export {Credentials, RequestModes};
