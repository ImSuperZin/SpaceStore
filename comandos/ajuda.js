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
            name: ":chocolate_bar: Melhor Loja De Minecraft Confiavel Do Brasil",
            value: ":wink: Vale A Pena Comprar "
          },
          {
            name: ":wave:",
            value: `<a:hypersquad:471788546466775061> Quer Parceria? , Fale com um <@494666318943879169> Ou Com <@496393136906567690>`

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
