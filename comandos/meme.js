const Discord = require("discord.js");
var randomPuppy = require("random-puppy")

  randomPuppy('memes')
.then(url => {
    var memeEmbed = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle('Meme entregue:')
        .setFooter(`Por: ${message.author.username}`, message.author.avatarURL)
        .setImage(url)
        .setColor('36393e')
    message.channel.send(memeEmbed);
});
