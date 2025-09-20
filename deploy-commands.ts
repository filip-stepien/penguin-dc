import { REST, Routes } from 'discord.js';
import 'dotenv/config';
import commands from '@/commands';
import { env } from './lib/env';

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(env.TOKEN);

// and deploy your commands!
(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        const commandData = commands.map(cmd => cmd.data.toJSON());

        await rest.put(Routes.applicationGuildCommands(env.CLIENT_ID, env.GUILD_ID), {
            body: commandData
        });

        console.log(`✅ Successfully reloaded ${commands.length} application (/) commands.`);
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
})();
