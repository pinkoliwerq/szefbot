const fs = require('fs')

module.exports = {
	name: 'help',
	description: 'Masz tu moje komendy!',
	execute(message) {
		let str = '';
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
			str += `Name: ${command.name}, Description: ${command.description} \n`;
		}

		message.channel.send(str);
	},
};