import { Logger } from '@reki/logger';
import { Client } from 'discord.js';

export class Main {
  public discord: Client;

  public logger: Logger;

  constructor() {
    this.discord = new Client();
    this.logger = new Logger({ scope: 'Client' });
  }

  async init(): Promise<void> {
    this.logger.debug('Starting client...');

    await this.discord.login(process.env.DISCORD_TOKEN).then(() => {
      this.logger.info(
        `Logged in successfully with ${this.discord.guilds.cache.size} guilds`,
      );
    });
  }
}
