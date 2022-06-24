const http = require('http')
const express = require('express')
const app = express()
const Resemble = require('@resemble/node')

const server = app.listen(process.env.PORT || 8000,async function () {
    const resemble = new Resemble('v2', 'zDoirHoJUI3xhHHnrPBH7wtt')
    const ProjectUuid = 'ec2d5337'
    const body = 'This audio was synthesized '
    const voiceUuid = '14ebc696'

    await resemble.clips.createAsync(ProjectUuid, {
        body: body,
        voice_uuid: voiceUuid
    })

})
