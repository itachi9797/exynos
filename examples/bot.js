const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})
const config = require('./config')

const Exynos = require('../dist')

const ExynosHandler = new Exynos.Client(client, {
  aliases: ['exynos', 'exy'],
  prefix: '!',
  noPerm: (message) => message.reply('🚫 You have no permission to use exynos.'),
  globalVariable: { SIKEY_IS_COOL: true }
})
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageCreate', async message => {
  if (message.content === 'ping') return message.reply('pong')
  await ExynosHandler.run(message)
})

client.login(config.token)
