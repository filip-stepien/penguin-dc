import { REST, Routes } from 'discord.js';
import 'dotenv/config';
import ping from './commands/utility/ping';
import { env } from './lib/env';

const commands = [ping.data.toJSON()];
// Grab all the command folders from the commands directory you created earlier

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(env.TOKEN);

// and deploy your commands!
(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        // The put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(Routes.applicationGuildCommands(env.CLIENT_ID, env.GUILD_ID), {
            body: commands
        });

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
})();
