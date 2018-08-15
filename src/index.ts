import * as hapi from 'hapi';
import Blankie from 'blankie';
import Scooter from 'scooter';
import logger from './tools/logger';
import { PORT } from './config/secrets';

const internals: Internals = {};

const server: hapi.Server = new hapi.Server({
    host: 'localhost',
    port: PORT
});

internals.init = async () => {
    await server.register([Scooter, {
        plugin: Blankie,
        options: {}
    }]);

    await server.start();
    if (process.env.NODE_ENV !== 'production') {
        logger.log('debug', 'Server started on port: ' + PORT);
    }
};

internals.init().catch((err: any) => {
    throw err;
});

