import logger from '../tools/logger';
import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync('.env')) {
    logger.debug('Using .env file to supply environment variables');
    dotenv.config({ path: '.env' });
} else {
    logger.debug('Using .env.test file to supply environment variables');
    dotenv.config({ path: '.env.test' });
}

export const PORT = process.env['PORT'];
export const SESSION_SECRET = process.env['SESSION_SECRET'];

if (!SESSION_SECRET) {
    logger.error('No client secret. Set SESSION_SECRET environment variable.');
    process.exit(1);
}
