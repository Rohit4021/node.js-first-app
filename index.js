const http = require('http')
const express = require('express')
const app = express()
const Resemble = require('@resemble/node')

const server = app.listen(process.env.PORT || 8080, async function() {
    const resemble = new Resemble('v2', 'S9uIzqSGjQ19i2BqWCExhAtt')
    const ProjectUuid = 'ec2d5337'
    const body = 'Hi, I am Rohit'
    const voiceUuid = '14ebc696'
    const callback_uri = 'https://pokemonxyz.herokuapp.com/'

    await resemble.clips.createAsync(ProjectUuid, {
        body: body,
        voice: voiceUuid,
        callback_uri: callback_uri
    })
})
