import { join, resolve } from 'path';

export function joinPath(...paths: string[]): string {
  return join(...paths);
}

export function resolvePath(...paths: string[]): string {
  return resolve(...paths);
}

export function makeJoinPath(baseUrl: string): typeof joinPath {
  return (...paths: string[]) => joinPath(baseUrl, ...paths);
}
