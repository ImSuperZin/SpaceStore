module.exports.run = async(client, message, args) =>{
  message.delete();  
  message.reply(`Mandei meus comandos no seu privado.`);
  message.author.send({embed: {
        color: 12584993,
        author: {
          name: `${message.author.tag}`,
          icon_url: message.author.avatarURL
        },
        title: ":wave: Informações - SpaceBot™",
        url: " ",
        description: "AVISO: Mil Membros Iremos Fazer Sorteio de capa da minecon",
        fields: [{
            name: ":school_satchel: Ajuda",
            value: "Quer saber alguns comandos meus? Veja abaixo! (lembrando que os comandos de moderação precisam do cargo `Staff`.)"
          },
          {
            name: ":mortar_board: Moderação",
            value: 
`
**-ban** = Irá banir o membro mencionado (Necessita da menção do usuário e motivo) 
**-unban** = Irá desbanir o membro já banido (Precisa da menção e motivo)
**-mute** = Irá mutar o membro mencionado (Precisa da menção e motivo)
**-unmute** = Irá desmutar o membro já mutado (o membro precisa estar mutado para poder desmutar)
**-limpar** = Limpará as mensagens (quantidade para colocar: 2 à 100 mensagens)
**-kick** = Irá kickar o membro mencionado (Necessita da menção do usuário e motivo) 
**-lockdown** = Irá fechar o chat. **(Poderá ter bugs!)**
**-parceiro** = Irá Anunciar Uma Nova Parceria**`
          
},
          {
            name: ":joy: Informação & Diversão",
            value: 
`
**-ping** = Caso queira ver o ping do bot
**-cat** = Gatinhos!!
**-votacao** = Fazer uma votação.
**-aviso** = Fazer um aviso.
**-conquista** = Fazer uma conquista.
**-piada** = O Bot irá fazer uma piada.
`
          
},
          {
            name: "Meu Criador:",
            value: "Bem, fui criado e programado por: <@272419543601643520>"
          },
          {
            name: "Twitter do criador:",
            value: `[Aqui](https://twitter.com/Super_Inscritos)`

          }, 
        
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© SpaceStore™"
        }
      }
    });
}
