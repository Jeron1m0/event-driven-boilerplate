const options = {
    definition: {
        openapi: "3.0.1",
        info: {
            version: "1.0.0",
            title: "APIs Document",
            description: "WebApp Backend API",
            termsOfService: "",
            contact: {
                name: "Ruben Morgade",
                email: "rmorgade@jeron1m0.com",
                url: "https://jeron1m0.com"
            },
            license: {
                name: "MPL-2.0",
                url: "https://spdx.org/licenses/MPL-2.0.html"
            }
        },
        servers: [
            {
                url: "http://localhost:4000",
                description: "Local server" 
            },
        ],
    },
    apis: [
        "./routes/*.js"
    ]
}

module.exports = options