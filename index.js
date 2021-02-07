const Discord = require('discord.js');
const client = new Discord.Client();

//event ready
client.on("ready", async => {

    //kasih notif online ke console
    console.log(`${client.user.username} Has Online`)
})

//login
client.login("ODA3ODM2NTE3MDk0Nzg1MDM0.YB9yYg.FEg02jeTK8YdGJADSV-NqEVO4HQ")