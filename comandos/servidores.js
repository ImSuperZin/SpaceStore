let bicon = bot.user.displayAvatarURL;
    let string = '';
    bot.guilds.forEach(guild => {
    string += guild.name + '\n';})
    let bt = bot.user.username;
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("Servidores:", string)
        .setTimestamp()
        .setFooter("Por: " + message.author.username, message.author.avatarURL);
    message.channel.send(botembed);
