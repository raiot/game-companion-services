import { API_ENDPOINT } from '../api/config';
import { APP_ID, MASTER_KEY } from '../../config/secrets';
import Wreck from 'wreck';
import logger from '../../tools/logger';

const gameClass = '_Games';

export async function getGames () {
    const wreck = Wreck.defaults({});
    const options = {
        headers: {
            'X-Parse-Application-Id': APP_ID,
            'X-Parse-Master-Key': MASTER_KEY
        }
    };
    const uri = `${API_ENDPOINT}${gameClass}`;
    let data = '';
    try {
        logger.log('debug', `Calling GET from ${uri}`);
        const res = await wreck.request('GET', uri, options);
        logger.log('debug', `Getting data: ${res} from ${uri}`);
        data = await Wreck.read(res);
        logger.log('debug', `Getting data: ${data} from ${uri}`);
        console.log(data);
    } catch (e) {
        logger.log('debug', 'Error: ' + e);
    }
    return JSON.parse(data);
}