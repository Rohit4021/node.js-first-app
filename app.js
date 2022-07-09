const http = require('http')
const express = require('express')
const app = express()
const Resemble = require('@resemble/node')
const fetch = require('node-fetch')
const {response} = require('express')
const Apify = require('apify')
const { log } = Apify.utils

const INPUT = {
    "username": "rohitkm4021@gmail.com",
    "password": "*i*am*TIND*#1"
}

await INPUT.json()

Apify.main(async () => {
    // Get the username and password inputs
    const input = await Apify.getValue('INPUT')

    const browser = await Apify.launchPuppeteer()
    const page = await browser.newPage()
    await page.goto('https://app.resemble.ai/users/sign_in')

    //Login
    await page.type('#user_email')
})

const server = app.listen(process.env.PORT || 8080, async function() {
    //const resemble = new Resemble('v2', 'S9uIzqSGjQ19i2BqWCExhAtt')
    const title = "New Clip"
    const body = 'Hi, I am Rohit'
    const voice_uuid = '14ebc696'
    const is_public = true

    const data = {title, body, voice_uuid, is_public}
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('https://app.resemble.ai/api/v2/projects/ec2d5337/clips', options).then(response => {
        console.log(response)
    })
})
