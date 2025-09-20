import { SlashCommandBuilder, ChatInputCommandInteraction, Collection } from 'discord.js';

export type Command = {
    data: SlashCommandBuilder;
    execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
};

declare module 'discord.js' {
    interface Client {
        commands: Collection<string, Command>;
    }
}
