// eslint-disable-next-line no-undef
module.exports = [
    {
        name: "fake-api",
        script: "node",
        args: "server.js",
        cwd: "/home/ubuntu/json-server-base",
        autorestart: true,
        watch: false,
        max_memory_restart: "1G",
        env: {
            NODE_ENV: "production",
        },
    },
]