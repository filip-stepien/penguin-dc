import fs from 'fs';
import path from 'path';
import { Command } from '@/lib/types';

const commands: Command[] = [];

const foldersPath = path.join(__dirname);
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    if (folder === 'index.ts') continue;

    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const command: Command = require(filePath).default;
        commands.push(command);
    }
}

export default commands;
