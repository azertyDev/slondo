#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
const {createServer} = require('http');
const {parse} = require('url');
const next = require('next');

const port = 3317;
const serverUrl = 'http://localhost';
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

console.log('dev mode: ' + dev);
console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true)
        handle(req, res, parsedUrl)
    }).listen(port, (err) => {
        if (err) throw err
        console.log(`Server started on ${serverUrl}:${port}`)
    })
});