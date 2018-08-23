import * as hapi from 'hapi';
import Blankie from 'blankie';
import Scooter from 'scooter';
import logger from './tools/logger';
import { PORT } from './config/secrets';
import * as handler from './server/api';
import indexHandler from './server';

const internals: Internals = {};
const API_URI = '/api';

const server: hapi.Server = new hapi.Server({
    host: 'localhost',
    port: PORT
});

internals.init = async () => {
    await server.register([Scooter, {
        plugin: Blankie,
        options: {}
    }]);

    server.route([
        { path: '/', method: 'GET', handler: indexHandler },
        { path: `${API_URI}/games`, method: 'GET', handler: handler.getGames }
    ]);

    await server.start();
    if (process.env.NODE_ENV !== 'production') {
        logger.log('debug', 'Server started on port: ' + PORT);
    }
};

internals.init().catch((err: any) => {
    throw err;
});

