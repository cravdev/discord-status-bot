const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot está online!');
});

app.listen(PORT, () => {
  console.log(`Servidor HTTP rodando na porta ${PORT}`);
});
// Configuração do Bot do Discord
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Bot online como ${client.user.tag}`);

  client.user.setPresence({
    activities: [{
      name: ' cinfoclan.com.br | https://discord.gg/ETuWZF3fF6', // Mude para o nome/link do seu servidor
      type: ActivityType.Playing // Mostra como "Jogando..."
    }],
    status: 'online',
  });
});

// O token virá de forma segura das configurações do Render
client.login(process.env.DISCORD_TOKEN);
