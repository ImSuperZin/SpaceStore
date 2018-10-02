const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    message.reply(`Enviei minhas informações em seu privado , olhe lá`).then(msg => msg.delete(6000));
    const msg1 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setColor('RANDOM')
    .setDescription(`Olá **${message.author.username}**, sou o \`SpaceStore\` Um bot oficial da loja.
    \n :robot: Meu criador: **» SuperPanda «#2032**.
    \n :desktop: Site: Em Criação!
    \n :question: Twitter: [Clique Aqui](https://twitter.com/Super_Inscritos
    \n\`Selecione alguma categoria para ver o comando.\`
    \n🔩 **»** Comandos de Moderação
    \n📋 **»** Outros comandos
    \n🤝 **»** Parceria`)
    message.member.send(msg1).then(msg=> {
        msg.react("🔩").then(r => {
            msg.react("📋")
                msg.react("🤝");

            const comandos = (reaction, user) => reaction.emoji.name === '🔩' && user.id === message.author.id;
            const geral = (reaction, user) => reaction.emoji.name === "📋" && user.id === message.author.id;
            const parceria = (reaction, user) => reaction.emoji.name === "🤝" && user.id === message.author.id;
            const eqp = msg.createReactionCollector(comandos, { time: 60000});
            const grl = msg.createReactionCollector(geral, { time: 60000});
            const prc = msg.createReactionCollector(parceria, { time: 60000});

            eqp.on('collect', r=> {
                const embed = new Discord.RichEmbed()
                .setAuthor("🔩 Comandos de Moderação")
                .setColor('RANDOM')
                .setDescription(`**ban** \`<@user>\` \`<motivo>\` - Para banir um membro do servidor.
                \n**kick** \`<@user>\` \`<motivo>\` - Para kickar um membro do servidor.
                \n**aviso** \`<mensagem do anúncio>\` - Para avisar algo na loja.
                \n**limpar** \`<quantia>\` - Para você limpar o chat.
                \n**votacao** \`<msg>\` - Para você abrir uma votação.
                \n**say** \`<msg>\` - Irá mandar mensagens com o bot.
                \n**parceiro** \`<msg>\` - Você ira mandar alguma nova parceria da loja.
                \n**mute** \`<@user>\` \`<motivo>\` - Irá mutar o usuário mencionado.
                \n**unmute** \`<@user>\` - Irá desmutar o usuário mencionado.`
                message.member.send({embed: embed}).then(a=>a.delete(15000));
            })
            grl.on('collect', r=>{
                const glr = new Discord.RichEmbed()
                .setAuthor("📋 Outros comandos")
                .setColor('RANDOM')
                .setDescription(`**ajuda** - Mostre meus comandos!.
                \n**avatar** - Para você baixar seu avatar.
                \n**avatar** \`<@user>\` - Para você baixar o avatar do usuário mencionado.
                \n**serverinfo** - Para ver as informações sobre a loja.`)
                message.author.send({ embed: glr }).then(a=>a.delete(15000));
            })
                        prc.on('collect', r=>{
                const prc = new Discord.RichEmbed()
                .setAuthor("🤝 Parceria")
                .setColor('RANDOM')
                .addField("Fale com um dono.")
                .addField("Benefícios","Divulgação em 2 a 2 dias, caso em 3 em 3 horas será sem everyone.")
                message.author.send({ embed: prc}).then(a=>a.delete(15000));
            })
        })
    })
}
//
module.exports.help = {
    name: "ajuda"
}
