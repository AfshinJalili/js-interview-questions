import testHtml from "./test-useClickAnywhere.html"

Bun.serve({
    routes: {
        "/": testHtml,
    },
    development: {
        hmr: true,
        console: true,
    },
    port: 3000,
})

console.log("Server running at http://localhost:3000")

