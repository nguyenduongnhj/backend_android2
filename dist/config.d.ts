declare const _default: {
    app: {
        name: string;
        url: string;
        port: string;
        cors_options: {
            origins: string[];
            methods: string[];
        };
    };
    mongodb: {
        uri: string;
    };
    jwt: {
        secretOrKey: string;
        expiresIn: number;
    };
    mail: {
        host: string;
        port: number;
        secure: boolean;
        user: string;
        pass: string;
        from: {
            address: string;
            name: string;
        };
        queue: {
            name: string;
            host: string;
            port: number;
        };
    };
    files: {
        defaultsFolderName: string;
        baseDirectory: string;
        imagesFolderName: string;
        imagesAvatarFolderName: string;
        imagesPostFolderName: string;
        filesFolderName: string;
        validImageMimetypes: string[];
        validImageExtensions: string[];
    };
};
export default _default;
