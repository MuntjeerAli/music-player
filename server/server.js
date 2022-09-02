const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');


const app = express();
app.use(cors())
app.use(bodyParser.json())

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'dedd4b6c1a454ff290bcc9206cb7f2c2',
        clientSecret: '1bae5358f6c541c5940dbb5f458399ec'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expireIn: data.body.expires_in
        })
    }).catch((err) => {
        res.sendStatus(400)
    })
})

app.listen(3001)