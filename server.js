const {createServer} = require('http')
const {parse} = require('url')
const next = require('next')

const port = process.env.PORT || 3317;
const serverUrl = process.env.SERVER_URL || 'http://localhost';
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        
        handle(req, res, parsedUrl)
        
    }).listen(port, (err) => {
        if (err) throw err
        console.log(`Server started on ${serverUrl}:${port}`)
    })
})