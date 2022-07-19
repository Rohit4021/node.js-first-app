const http = require('http')
const express = require('express')
const app = express()
const Resemble = require('@resemble/node')
const path = require('path')

app.listen(5000, async function () {
    const resemble = new Resemble('v2', 'Yij7R3EN5zisTHQBkWV3owtt')
    const projectUuid = "5a7ed851"
    const clipUuid = "ff5ba882"

    const get = await resemble.clips.get(projectUuid, clipUuid)
    const convertString = JSON.stringify(get)
    const obj = JSON.parse(convertString)
    const audioSource = obj["item"]["audio_src"]

    return audioSource
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
})
