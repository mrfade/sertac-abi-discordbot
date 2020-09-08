const Discord = require('discord.js')
const client = new Discord.Client()
require('dotenv').config()

client.on('ready', () => {
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`)

    client.user.setActivity(`Serving ${client.guilds.cache.size} servers`)
})

client.on('message', message => {
    if (message.author.bot) return

    if (message.content.includes('sertaç abi')) {
        message.reply('ne amına')
    }
})

client.login(process.env.TOKEN)