export const rotasRoutes = {
    createRotas: {
        handler:
            "src/functions/rotas/createRota.handler",
        events: [
            {
                http: {
                    path: "rota",
                    method: "post",
                    cors: true,
                    // authorizer: {
                    //   name: "authenticate",
                    // },
                },
            },
        ],
    },

    findRota: {
        handler:
            "src/functions/rotas/findRota.handler",
        events: [
            {
                http: {
                    path: "rota/{letra}",
                    method: "get",
                    cors: true,
                    // authorizer: {
                    //   name: "authenticate",
                    // },
                },
            },
        ],
    },

    insertCondominio: {
        handler:
            "src/functions/rotas/insertCondominio.handler",
        events: [
            {
                http: {
                    path: "rota/{letra}/condominio",
                    method: "post",
                    cors: true,
                    // authorizer: {
                    //   name: "authenticate",
                    // },
                },
            },
        ],
    },

    listRotas: {
        handler:
            "src/functions/rotas/listAll.handler",
        events: [
            {
                http: {
                    path: "rotas",
                    method: "get",
                    cors: true,
                    // authorizer: {
                    //   name: "authenticate",
                    // },
                },
            },
        ],
    },

}