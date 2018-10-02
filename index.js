const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const ownerID = `272419543601643520`;
const prefix = `-` ;
var comandos = new Discord.Collection();

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log("Ativado.");
   let gameloop = require('./comando_dono/loop.js'); // Ativaidae de status!!!!!!!!!!
    gameloop.run(client);
})


    console.log('O Bot foi iniciado com sucesso.'.green);
    console.log(`O meu prefixo Ã© ${prefix}`);

client.on('message', message => {
    if(message.content == 'SpaceBot'){
      var embed = new Discord.RichEmbed()
      .setDescription(`**${message.author}**, Twitter Do Criador do bot: \n [Twitter](https://twitter.com/Super_Inscritos).`)
      message.channel.send(embed)
    }
  });
client.on('message', message => {
    if(message.content == 'SpaceStore'){
      var embed = new Discord.RichEmbed()
      .setDescription(`**${message.author}**, A Melhor Loja Confiável de \`Minecraft\`.`)
      message.channel.send(embed)
    }
  });
client.on('message', message => {
    if(message.content.toLowerCase() === 'Panda')
    message.channel.send('');

});
client.on('message', message => {
    if(message.content.toLowerCase() === 'cu')
    message.channel.send('de cachorro');

});


client.on('message', message => {

    var autor = message.author;
    var msg = message.content.toUpperCase();
    var cont = message.content.slice(prefix.lenght).split('');

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./comandos/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
    message.delete();

});


