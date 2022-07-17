const http = require('http')
const express = require('express')
const app = express()
const Resemble = require('@resemble/node')

async function get(request, response) {
    const resemble = new Resemble('v2', 'nr37R4EtojghW8SE8Kloowtt')
    const projectUuid = "e3b47f1a"
    const clipUuid = "8c3147b5"

    const get = await resemble.clips.get(projectUuid, clipUuid)
    console.log(get)
}

app.listen(5000, get)
