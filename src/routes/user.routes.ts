export const userRoutes = {
    createUser: {
        handler:
            "src/functions/usuario/createUser.handler",
        events: [
            {
                http: {
                    path: "user",
                    method: "post",
                    cors: true,
                    // authorizer: {
                    //   name: "authenticate",
                    // },
                },
            },
        ],
    },

    findUser: {
        handler:
            "src/functions/usuario/findUser.handler",
        events: [
            {
                http: {
                    path: "user/{username}",
                    method: "get",
                    cors: true,
                    // authorizer: {
                    //   name: "authenticate",
                    // },
                },
            },
        ],
    },

    deleteUser: {
        handler:
            "src/functions/usuario/deleteUser.handler",
        events: [
            {
                http: {
                    path: "user/{username}",
                    method: "delete",
                    cors: true,
                    // authorizer: {
                    //   name: "authenticate",
                    // },
                },
            },
        ],
    },
}