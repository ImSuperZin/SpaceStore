const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter(`Servidor criado • ${day}.${month}.${year}`)
   .setColor("#ffffff")
   .setTimestamp()
   .setThumbnail(sicon)
   .addField(":cupid: ID:", message.guild.id, true)
   .addField(":name_badge: Nome:", message.guild.name, true)
   .addField(":crown: Dono:", message.guild.owner.user.tag, true)
   .addField(":flag_br: Região:", message.guild.region, true)
   .addField("💬 Channels", message.guild.channels.size, true)
   .addField("👤 Membros:", message.guild.memberCount, true)
   .addField(":radioactive:Bots", message.guild.members.filter(m => m.user.bot).size, true)
   .addField(":green_heart: Onlines:", online.size, true)
   .addField(":octagonal_sign: Tags:", message.guild.roles.size, true);
   message.channel.send(serverembed);

}
