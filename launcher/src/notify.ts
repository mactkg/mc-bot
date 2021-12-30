import {WebhookClient} from 'discord.js';

const cli = new WebhookClient({
  url: process.env['DISCORD_WEBHOOK_URL'] as string,
});

export const notify = (str: string) => {
  cli.send({
    content: str,
    username: 'Minecraft Bot',
  });
};
