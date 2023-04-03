import path from 'path';
import dotenvSafe from 'dotenv-safe';
import * as process from "process";

const cwd = process.cwd();

const root = path.join.bind(cwd);

dotenvSafe.config({
  path: root('.env'),
  sample: root('.env.example'),
});

export const config = {
  API_PORT: 4000,
  DISCORD_CHANNEL_WEBHOOK: process.env.DISCORD_CHANNEL_WEBHOOK,
};