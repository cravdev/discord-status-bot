// 1. Importações do Discord e Express
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const express = require('express');

// 2. Configuração do Servidor Web (para o UptimeRobot / Render)
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot está online!');
});

app.listen(PORT, () => {
  console.log(`Servidor HTTP rodando na porta ${PORT}`);
});

// 3. Configuração do Bot do Discord
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Bot online como ${client.user.tag}`);

  // Define o estado / presença do Bot
  client.user.setPresence({
    activities: [{
      name: 'cinfoclan.com.br | https://discord.gg/ETuWZF3FF6',
      type: ActivityType.Playing
    }],
    status: 'online'
  });
});

// 4. Autenticação (O token virá das variáveis de ambiente do Render)
client.login(process.env.DISCORD_TOKEN);
