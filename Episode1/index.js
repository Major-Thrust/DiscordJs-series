const discord = require('discord.js')//importing discord package
const client = new discord.Client()//getting client class 
client.login('Your Token Here')//Token here!

client.on('message', async message => {//Event which triggers when a user sends a message
    if(message.content === 'hello world') return message.channel.send('Hey :)')//sending a message to the channel
})
