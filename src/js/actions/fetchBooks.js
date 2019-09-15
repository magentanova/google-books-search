import { formatQueryURL } from '../utils';
import { SEARCH_URL } from '../settings';

export default query => {
    return fetch(formatQueryURL(SEARCH_URL, query))
        .then(
            resp => resp.json()
        )
        .then(
            json => json
        )
        .catch(
            err => {
                throw new Error(err);
            }
        );
};
