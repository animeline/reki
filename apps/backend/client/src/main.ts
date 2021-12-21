import 'reflect-metadata';
import 'dotenv-defaults/config';

import { DiscordManager, HttpServerManager } from '@core/managers';

function main(): void {
  const discordManager = new DiscordManager();
  const httpServerManager = new HttpServerManager();

  discordManager.connect().then(() => {
    httpServerManager.connect();
  });
}

main();
