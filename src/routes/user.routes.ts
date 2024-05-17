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
                    path: "user/{email}",
                    method: "get",
                    cors: true,
                    // authorizer: {
                    //   name: "authenticate",
                    // },
                },
            },
        ],
    },

    updateUser: {
        handler:
            "src/functions/usuario/updateUser.handler",
        events: [
            {
                http: {
                    path: "user/{email}",
                    method: "put",
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
                    path: "user/{email}",
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