<div align="center">
<br/>
<p>
    <a href="https://nodei.co/npm/exynos/"><img src="https://nodei.co/npm/exynos.png"></a>
</p>
</div>

## About

exynos. Easy Discord bot debuging tool.

It's debugging tool for `discord.js` projects.


## Installation

<details>
    <summary>Using Discord.js v12?</summary>

You could install `exynos@0.4.1` by
    
```sh
  npm i exynos@djsv12
```
</details>

<details>
    <summary>Using Discord.js v13?</summary>

You could install `exynos@0.5.1` by
    
```sh
  npm i exynos@djsv13
```
</details>

### Stable

```sh
npm i exynos@latest
```

### Dev

```sh
npm i sikey-dev/exynos/#main
```

## Example usage

```js
const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})

const Exynos = require('exynos')

const ExynosHandler = new Exynos.Client(client, {
  aliases: ['exynos', 'exy'],
  prefix: '!',
  noPerm: (message) => message.reply('🚫 You have no permission to use exynos.')
})
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageCreate', async message => {
  if (message.content === 'ping') return message.reply('pong')
  await ExynosHandler.run(message)
})

client.login('YOUR DISCORD BOT TOKEN')
```

## Contributing

Please check out it hasn't already been exists before you create issue, and check [the contribution guide](./.github/CONTRIBUTING.md) before you submit Pull Request.