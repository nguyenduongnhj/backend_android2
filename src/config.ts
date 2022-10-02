export default {
    app: {
        name: "Web",
        url: "http://222.252.92.106:3000",
        port: "3000",
        cors_options: {
            origins: ["http://127.0.0.1:3000", "http://localhost:3000"],
            methods: ['GET', 'PUT', 'POST']
        }
    },
    mongodb: {
        uri: "mongodb://127.0.0.1:27017/android2"
    },
    jwt: {
        secretOrKey: "doragon",
        expiresIn: 36000000
    },
    mail: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        user: "caidmconcho@gmail.com",
        pass: "phamhieudeptraivodich",
        from: {
            address: 'phhieu29@gmail.com',
            name: 'btlWeb'
        },
        queue: {
            name: 'mailer',
            host: "127.0.0.1",
            port: 6379
        }
    },
    files: {
        defaultsFolderName: "",
        baseDirectory: './storage',
        imagesFolderName: 'images',
        imagesAvatarFolderName: 'images/avatars',
        imagesPostFolderName: 'images/posts',
        filesFolderName: 'files',
        validImageMimetypes: [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif',
            'image/svg+xml',
        ],
        validImageExtensions: [
            'jpg',
            'jpeg',
            'png',
            'gif'
        ]
    }
}
