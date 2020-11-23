const Discord = require('discord.js')
const client = new Discord.Client()
require('dotenv').config()

const express = require('express')
const app = express()
const basicAuth = require('express-basic-auth')

const channelId = '780104162209300530'
const port = 4683

app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))
// app.use(basicAuth({
    // users: {
        // 'meneksefamily': 'sertacabimbe'
    // }
// }))

app.get('/', function (req, res) {
    res.sendFile('index.html')
})

app.post('/send-message', function (req, res) {
    const message = req.body.message.trim()
    const channel = client.channels.cache.get(channelId)

    if (message && channel)
        channel.send(message)

    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})

client.on('ready', () => {
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`)

    // client.user.setActivity(`Serving ${client.guilds.cache.size} servers`)
})

client.on('message', message => {
    if (message.author.bot) return

    // console.log(message)

    const msg = message.content.trim().toLowerCase()

    if (message.channel.id === channelId) {

        if (msg.includes('sertaç abi')) {
            if (msg.includes('günaydın'))
                message.reply('günaydın')
            else if (msg.includes('iyi geceler'))
                message.reply('iyi geceler')
            else if (msg.includes('nasılsın'))
                message.reply('iyiyim sen nasılsın')
            else if (msg.includes('naber'))
                message.reply('iyidir senden naber')
            else
                message.reply('ne amına')
        }

    } else if (message.channel.type === 'dm') {

        if (msg.includes('günaydın'))
            message.reply('günaydın')
        else if (msg.includes('iyi geceler'))
            message.reply('iyi geceler')
        else if (msg.includes('nasılsın'))
            message.reply('iyiyim sen nasılsın')
        else if (msg.includes('naber'))
            message.reply('iyidir senden naber')
        else if (msg.includes('sertaç abi'))
            message.reply('ne amına')

    }
})

client.login(process.env.TOKEN)