/* eslint-disable no-console */

import { cyan, red, yellow, green, grey } from 'chalk';

interface ILoggerOptions {
  scope: string;
}

const getBase = (scope: string): string[] => {
  return [
    grey(`[${new Date().toLocaleTimeString('pt-BR')}]`),
    grey(`[PID ${process.pid}]`),
    grey(`[${scope}] ›`),
  ];
};

export class Logger {
  private scope: string;

  public base: string[];

  constructor(options: ILoggerOptions) {
    this.scope = options.scope;

    this.base = [];
  }

  info(message: string): void {
    console.log(
      getBase(this.scope)
        .concat(cyan('info'), message)
        .filter(Boolean)
        .join(' '),
    );
  }

  error(message: string, error?: any): void {
    console.log(
      getBase(this.scope)
        .concat(red('error'), message, error ?? ` => ${error}`)
        .filter(Boolean)
        .join(' '),
    );
  }

  warn(message: string): void {
    console.log(
      getBase(this.scope)
        .concat(yellow('warn'), message)
        .filter(Boolean)
        .join(' '),
    );
  }

  debug(message: string): void {
    console.log(
      getBase(this.scope)
        .concat(green('debug'), message)
        .filter(Boolean)
        .join(' '),
    );
  }
}
