export const cvtRoutes = {
    createCVT: {
        handler:
          "src/functions/cvt/createCVT.handler",
        events: [
          {
            http: {
              path: "cvt",
              method: "post",
              cors: true,
              // authorizer: {
              //   name: "authenticate",
              // },
            },
          },
        ],
      },

    listAllCVT: {
        handler:
            "src/functions/cvt/listAll.handler",
        events: [
            {
                http: {
                    path: "cvts",
                    method: "get",
                    cors: true,
                    // authorizer: {
                    //   name: "authenticate",
                    // },
                },
            },
        ],
    }

}