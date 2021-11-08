#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-varrom s */
import next from 'next';
import cluster from 'cluster';
import {config} from 'dotenv';
import {cpus} from 'os';
import {parse} from 'url';
import {createServer} from 'http';

config();
const port = 3317;
const serverUrl = 'http://localhost';
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const numCPUs = cpus().length;
const handle = app.getRequestHandler();

console.log('dev mode: ' + dev);

if (dev) {
    app.prepare().then(() => {
        createServer((req, res) => {
            handle(req, res, req.url);
        }).listen(port, (err) => {
            if (err) throw err;
            console.log(`Server started on ${serverUrl}:${port}`);
        });
    });
} else {
    if (cluster.isPrimary) {
        console.log(`Primary ${process.pid} is running`);

        // Fork workers.
        for (let i = 0; i < numCPUs - 1; i++) {
            cluster.fork();
        }

        cluster.on('exit', (worker, code, signal) => {
            if (signal) {
                console.log(`worker was killed by signal: ${signal}`);
            } else if (code !== 0) {
                console.log(`worker exited with error code: ${code}`);
            } else {
                console.log('worker success!');
            }
            console.log(`worker ${worker.process.pid} died`);
        });
    }

    if (cluster.isWorker) {
        app.prepare().then(() => {
            createServer((req, res) => {
                const parsedUrl = parse(req.url, true);
                handle(req, res, parsedUrl);
            }).listen(port, (err) => {
                if (err) throw err;
                console.log(`Server started on ${serverUrl}:${port}`);
            });
        });
        console.log(`Worker ${process.pid} started`);
    }
}

