const express = require('express')
const puppeteer = require('puppeteer')
const app = express()

async function puppeteerF() {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto("https://app.resemble.ai/users/sign_in")

    await page.waitForSelector("#user_email")
    await page.waitForSelector("#user_password")
    await page.waitForSelector(".btn.btn-primary.btn-block")
    await page.type("#user_email", "rohitkm4021@gmail.com", { delay: 75 })
    await page.type("#user_password", "*i*am*TIND*#1", { delay: 75 })
    await page.click(".btn.btn-primary.btn-block")

    return console.log(page.url())
}

app.listen(5000, puppeteerF)
