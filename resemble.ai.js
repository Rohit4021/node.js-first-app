const express = require('express')
const app = express()
const port = 8080 || process.env.PORT
const fetch = require('node-fetch')
const url = require("url");
const puppeteer = require('puppeteer')
const {defaultMaxListeners} = require("form-data");

const splitStringSlash = (str) => {
    const string = str.split('/')

    return string[2]
}

const splitStringHi = (str) => {
    const urlString = splitStringSlash(str)
    const string = urlString.split('-')

    return string[0]
}

function repeat(func, times) {
    func()
    times && --times && repeat(func, times)
}

app.get('/', (req, res) => {
    fetch("https://app.resemble.ai/voices", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Authorization": "Token token=yGkXJabOADCt6DrIi42YAgtt",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "cookie": "heroku-session-affinity=ADaDaANoA24IAbBPU/z///8HYgAJF5JiAAWk2GECbAAAAAJtAAAABXdlYi4ybQAAAAV3ZWIuMWpxTAfSqggfo+VlPAQgCwl9s5UvkQ__; _gcl_au=1.1.711347455.1661595860; _gid=GA1.2.1157705585.1661595861; _gat_gtag_UA_123173631_1=1; _clck=18qse4a|1|f4d|0; _cioanonid=e28f446b-02fb-672c-d5c1-2c2d81b939e7; __stripe_mid=d86a02c4-98a4-40c6-a159-7c29cb8317666d4863; __stripe_sid=2f407d5d-48f4-49af-9c4f-1264bbd9e7c5c2b5dc; crisp-client%2Fsession%2F36ebd653-2f86-4254-9ae9-33c1620f9014=session_f71728f3-33ff-4e79-beca-cb306a8c2080; _ga=GA1.1.1214345186.1661595861; _cioid=rohitkm40021@gmail.com; gist.web.userToken=rohitkm40021@gmail.com; _voicepods_session=50Wfg5kUQwTTt%2BZz2u%2FwcDpIcTC%2F%2F2l%2B64KQ%2BdcRFyo1C64%2BauRfLSbeY5MX3Ixc%2FNgeKQMKOmGNgogYzd5CDOjJsKEOKeoeTxwGkDEsFs4zEhInpPnBkOjdleVaP5WHve0sWODQjDvGMXHJhhoYwlau%2BRvv9f0n4A%2F0GQ%2FlEmL34tYuJv2XDJ2ce49lLZVw0O92C0%2FbE%2BjRyQmh%2FgaHK6tyer0f8xwvh1JGeDB4A5jywnFmw3BVasWckM1m%2FhUHA1eZwQqN0GWeCdNHIi8dvdMgIhPSc4pypxslfjT%2FlxPbgmdwaGG3EOjlItBh1fTt5rgpbqwhV0%2BAsYp1sLwz0RbRGPkcdaJ2FPJt5S0i%2B1%2F57OiinpZu5aJ1JS4T0RXrI1WgB2udkDXRmPjVzXRBh2qC--2ZU5S6EZKL3olSRq--5LBoEHiv5GKwaId2Hpl%2FQQ%3D%3D; _ga_HJ45Q56GP6=GS1.1.1661595860.1.1.1661595884.36.0.0; _clsk=5cbiv3|1661595884852|4|1|m.clarity.ms/collect",
            "Referer": "https://app.resemble.ai/voices/new",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "authenticity_token=zTnQ4SKsLriSMwatX5AKMxbo7oAVaqBWXtBQT%2FqNQDcG7hJN4lVsBtIFR4eoNCMon318tkGuZOVGVRT45xhyrw%3D%3D&voice%5Bcreate_type%5D=record&voice%5Bscript_type%5D=default&voice%5Bname%5D=Rohit",
        "method": "POST"
    }).then(async (value) => {
        const address = value.url

        const browser = await puppeteer.launch({ headless: false })

        const page = await browser.newPage()

        await page.goto('https://app.resemble.ai')
        await page.type('#user_email', 'rohitkm40021@gmail.com', { delay: 100 })
        await page.type('#user_password', '*i*love*Naaz*#1')
        await page.click('.btn')
        await page.goto(address)

    }).catch((reason) => {
        console.log(reason)
    })
})

app.listen(port, () => {
    `Listening at port : ${port}`
})
