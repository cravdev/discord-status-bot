
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const express = require('express');


const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot está online!');
});

app.listen(PORT, () => {
  console.log(`Servidor HTTP rodando na porta ${PORT}`);
});


const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Bot online como ${client.user.tag}`);


  client.user.setPresence({
    activities: [{
      name: 'cinfoclan.com.br | https://discord.gg/ETuWZF3FF6',
      type: ActivityType.Playing
    }],
    status: 'online'
  });
});


client.login(process.env.DISCORD_TOKEN);
