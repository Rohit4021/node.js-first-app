const http = require('http')
const express = require('express')
const app = express()
const Resemble = require('@resemble/node')
let {response} = require("express");

app.get('https://app.resemble.ai/api/v2/projects/f1eb8d9b/clips/2517d8db', function (req, res) {
    response = {
        "success": true,
        "item": {
            "uuid": req.query.uuid,
            "title": req.query.title,
            "body": req.query.body,
            "voice_uuid": req.query.voice_uuid,
            "is_public": true,
            "is_archived": false,
            "timestamps": {
                "graph_chars": [
                    "H",
                    "e",
                    "l",
                    "l",
                    "o",
                    ",",
                    " ",
                    "T",
                    "h",
                    "i",
                    "s",
                    " ",
                    "i",
                    "s",
                    " ",
                    "t",
                    "h",
                    "e",
                    " ",
                    "v",
                    "o",
                    "i",
                    "c",
                    "e",
                    " ",
                    "o",
                    "f",
                    " ",
                    "R",
                    "o",
                    "h",
                    "i",
                    "t",
                    "."
                ],
                "graph_times": [
                    [
                        0.0125,
                        0.1122
                    ],
                    [
                        0.0624,
                        0.1621
                    ],
                    [
                        0.1247,
                        0.2245
                    ],
                    [
                        0.1871,
                        0.2993
                    ],
                    [
                        0.2744,
                        0.3866
                    ],
                    [
                        0.3617,
                        0.4739
                    ],
                    [
                        0.449,
                        0.5612
                    ],
                    [
                        0.5363,
                        0.6361
                    ],
                    [
                        0.5363,
                        0.6361
                    ],
                    [
                        0.5986,
                        0.6984
                    ],
                    [
                        0.661,
                        0.7608
                    ],
                    [
                        0.7234,
                        0.8231
                    ],
                    [
                        0.7857,
                        0.8855
                    ],
                    [
                        0.8481,
                        0.9478
                    ],
                    [
                        0.898,
                        0.9853
                    ],
                    [
                        0.9354,
                        1.0351
                    ],
                    [
                        0.9354,
                        1.0351
                    ],
                    [
                        0.9853,
                        1.0726
                    ],
                    [
                        1.0351,
                        1.1349
                    ],
                    [
                        1.0975,
                        1.1848
                    ],
                    [
                        1.0975,
                        1.1848
                    ],
                    [
                        1.1599,
                        1.2596
                    ],
                    [
                        1.2222,
                        1.3345
                    ],
                    [
                        1.2971,
                        1.3968
                    ],
                    [
                        1.3719,
                        1.4717
                    ],
                    [
                        1.4342,
                        1.534
                    ],
                    [
                        1.4966,
                        1.5964
                    ],
                    [
                        1.5465,
                        1.6338
                    ],
                    [
                        1.5964,
                        1.7336
                    ],
                    [
                        1.7086,
                        1.7959
                    ],
                    [
                        1.771,
                        1.8707
                    ],
                    [
                        1.8458,
                        1.9456
                    ],
                    [
                        1.9206,
                        2.0329
                    ],
                    [
                        1.9955,
                        2.0828
                    ]
                ],
                "phon_chars": [
                    "h",
                    "ə",
                    "l",
                    "ˈo",
                    "ʊ",
                    ",",
                    " ",
                    "ð",
                    "ɪ",
                    "s",
                    " ",
                    "ɪ",
                    "z",
                    " ",
                    "ð",
                    "ə",
                    " ",
                    "v",
                    "ˈɔ",
                    "ɪ",
                    "s",
                    " ",
                    "ʌ",
                    "v",
                    " ",
                    "ɹ",
                    "ˈo",
                    "ʊ",
                    "h",
                    "ɪ",
                    "t",
                    "."
                ],
                "phon_times": [
                    [
                        0.0125,
                        0.1122
                    ],
                    [
                        0.0624,
                        0.1621
                    ],
                    [
                        0.1247,
                        0.2245
                    ],
                    [
                        0.1871,
                        0.2993
                    ],
                    [
                        0.2744,
                        0.3866
                    ],
                    [
                        0.3617,
                        0.4739
                    ],
                    [
                        0.449,
                        0.5612
                    ],
                    [
                        0.5363,
                        0.6361
                    ],
                    [
                        0.5986,
                        0.6984
                    ],
                    [
                        0.661,
                        0.7608
                    ],
                    [
                        0.7234,
                        0.8231
                    ],
                    [
                        0.7857,
                        0.8855
                    ],
                    [
                        0.8481,
                        0.9478
                    ],
                    [
                        0.898,
                        0.9853
                    ],
                    [
                        0.9354,
                        1.0351
                    ],
                    [
                        0.9853,
                        1.0726
                    ],
                    [
                        1.0351,
                        1.1349
                    ],
                    [
                        1.0975,
                        1.1848
                    ],
                    [
                        1.1599,
                        1.2596
                    ],
                    [
                        1.2222,
                        1.3345
                    ],
                    [
                        1.2971,
                        1.3968
                    ],
                    [
                        1.3719,
                        1.4717
                    ],
                    [
                        1.4342,
                        1.534
                    ],
                    [
                        1.4966,
                        1.5964
                    ],
                    [
                        1.5465,
                        1.6338
                    ],
                    [
                        1.5964,
                        1.6837
                    ],
                    [
                        1.6463,
                        1.7336
                    ],
                    [
                        1.7086,
                        1.7959
                    ],
                    [
                        1.771,
                        1.8707
                    ],
                    [
                        1.8458,
                        1.9456
                    ],
                    [
                        1.9206,
                        2.0329
                    ],
                    [
                        1.9955,
                        2.0828
                    ]
                ]
            },
            "audio_src": req.query.audio_src,
            "raw_audio": req.any(),
            "created_at": req.date.created_at,
            "updated_at": req.date.updated_at
        }
    };
    console.log(response);
    res.end(JSON.stringify(response))
})

const server = app.listen(process.env.PORT || 8000,async function () {
    console.log('success');
    const resemble = new Resemble('v2', 'zDoirHoJUI3xhHHnrPBH7wtt')

    await resemble.clips.get('f1eb8d9b', '2517d8db')
});