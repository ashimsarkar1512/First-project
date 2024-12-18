import dotenv from 'dotenv';

import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salts_rounds: process.env.BYCRIPT_HASH_ROUNDS,
  default_pass:process.env.DEFAULT_PASS,
};
