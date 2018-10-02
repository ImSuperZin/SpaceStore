  client.on("message", message => {
    if (message.author.bot) return;
    if(message.channel.type == "dm") return
   
    database.Guilds.findOne({
        "_id": message.guild.id
    }, function (documento, documento) {
        if(documento) {
            database.Users.findOne({
           
                "_id": message.author.id
            }, function (erro, sdocumento) {
                if(sdocumento) {
    if (!message.content.startsWith(documento.sprefix)) return;
  
                             
    let command = message.content.split(" ")[0];
    command = command.slice(documento.sprefix.length);
   
    let args = message.content.split(" ").slice(1);
    // The list of if/else is replaced with those simple 2 lines:
   
    try {

      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
        
    } catch (err) {
        console.error(err);
      const embed = new Discord.RichEmbed()
      .addField('Gray - AntiCrash', err)
.setColor('#FE2E64')
            
      .setFooter(`${message.author.tag} `, message.author.avatarURL)
      .setTimestamp(new Date())
    message.channel.send(embed) 
    }

      
} else {
    var pessoa = new database.Users({
        _id: message.author.id,
       })

    pessoa.save()
}
});
} else {}
var servidor = new database.Guilds({
_id: message.guild.id,
sprefix: 'gr!',
})
servidor.save()


});
