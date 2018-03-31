const Discord = require('discord.js');
const whitey = new Discord.Client();

whitey.on('guildMemberAdd', member => {
   //member.guild.channels.get('414151682264662016').send(member.user.toString()+' Ei seu bunda mole');
   member.guild.channels.get('414151682264662016').send(`${member} Ola parceiro, como vai a vida? ('vai bem ou vai mal`);
});

/*whitey.on('message', message => {
    if (message.content === 'vai bem') 
    {
        message.reply('Que bom, gostaria de ganhar umas pratas a mais trabalhando para a justiça?? (lSim/lNão)');
        if(message.content === 'lSim')
        {
           message.reply('Ótimo, pegue este revolver e va patrulhar!');
           message.member.addRole('429157255720730624');
           message.member.addRole('429163812512333826');
        }
        else (message.content === 'lNão')
        {
           message.reply('Tudo bem parceiro, muito boa tarde');
        }
    }
   
    else if(message.content === 'vai mal')
    {
        message.reply('Poxa, que pena amigo. Umas pratas a mais trabalhando pra justiça poderiam ajudar. que tal? (lSim/lNão)');
         if(message.content === 'lSim')
         {
           message.reply('Ótimo, pegue este revolver e va patrulhar!');
           message.member.addRole('429157255720730624');
           message.member.addRole('429163812512333826');
        }
        else (message.content === 'lNão')
        {
           message.reply('Tudo bem parceiro, muito boa tarde');
        }
        
    }
});
*/
// THIS  MUST  BE  THIS  WAY
serginho.login(process.env.BOT_TOKEN);
