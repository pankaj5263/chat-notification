import dotenv from 'dotenv';
import {treeifyError, z} from 'zod';

import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../../../.env"),
});

const envSchema = z.object({
    NODE_ENV: z.enum([
        "development",
        "production",
        "test"
    ]),
    PORT: z.coerce.number(),
    SOCKET_PORT: z.coerce.number(),
    DATABASE_URL: z.string(),
    REDIS_URL: z.string(),
    JWT_SECRET: z.string(),
});

const parsedEnv = envSchema.safeParse(process.env);


if(!parsedEnv?.success){
  console.error("Inavlid environment variables");

  console.log(treeifyError(parsedEnv.error));

  process.exit(1);
}

export default parsedEnv.data;
