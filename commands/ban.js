const { getUserFromMention } = require('../util/getUser')

module.exports = {
	name: 'ban',
	description: 'Zbanuj chuja raz na zawsze! Amen',
	execute(message, client) {
		const split = message.content.split(/ +/);
		const args = split.slice(1);

		const member = getUserFromMention(args[0], client);

		if (!member) {
			return message.reply('Musisz debilu oznaczyć osobę którą chcesz zbanować! kapisz?');
		}

		if (!message.member.permissions.has("BAN_MEMBERS")) {
			return message.reply('Nie mogę go zbanować to jest chyba Szef Szefów!');
		}

		return message.guild.members.ban(member)
			.then(() => message.reply(`${member.username} was banned.`))
			.catch(error => message.reply('ERROR'));
	},
};