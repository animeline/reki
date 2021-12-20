/* eslint-disable no-console */

import { blue, red, yellow, green, grey, magenta, white } from 'chalk';

interface ILoggerOptions {
  scope: string;
}

export class Logger {
  private scope: string;

  constructor(options: ILoggerOptions) {
    this.scope = options.scope;
  }

  info(message: string): void {
    console.log(this.base.concat(blue('info'), message).join(' '));
  }

  error(message: string, error?: any): void {
    console.log(
      this.base
        .concat(red('error'), message, error ? ` => ${error}` : '')
        .filter(Boolean)
        .join(' '),
    );
  }

  warn(message: string): void {
    console.log(this.base.concat(yellow('warn'), message).join(' '));
  }

  debug(message: string): void {
    console.log(this.base.concat(green('debug'), message).join(' '));
  }

  get base(): string[] {
    return [
      grey(`[${new Date().toLocaleTimeString('pt-BR')}]`),
      grey(`[PID ${process.pid}]`),
      magenta(`[${this.scope}]`),
      white('›'),
    ];
  }
}
