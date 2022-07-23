var express = require('express');
var router = express.Router();
const Resemble = require('@resemble/node')


async function waitsfnsdh() {
  const resemble = new Resemble('v2', 'Yij7R3EN5zisTHQBkWV3owtt')
  const projectUuid = "5a7ed851"
  const clipUuid = "ff5ba882"

  const get = await resemble.clips.get(projectUuid, clipUuid)
  const convertString = JSON.stringify(get)
  const obj = JSON.parse(convertString)
  const audioSource = obj["item"]["audio_src"]
  return audioSource
}

/* GET home page. */
router.get('/', function(req, res, next, audioSource) {
  res.render('index', { title: 'Express' });
  res.render('index', { audio_url: audioSource })
});

module.exports = router;
