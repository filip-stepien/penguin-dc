import z from 'zod';

const envSchema = z.object({
    TOKEN: z.string(),
    GUILD_ID: z.string(),
    CLIENT_ID: z.string()
});

export type Env = z.infer<typeof envSchema>;

export const env: Env = envSchema.parse(process.env);
