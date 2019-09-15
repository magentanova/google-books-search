import { formatQueryURL } from '../utils';
import { SEARCH_URL } from '../settings';

export default query => {
    if (query === undefined) {
        throw new Error('fetchBooks() must be invoked with a search term.');
    };
    const searchEndpoint = formatQueryURL(SEARCH_URL, query);
    return fetch(searchEndpoint)
        .then(
            resp => resp.json()
        )
        .then(
            json => ({...json, searchEndpoint})
        )
        .catch(
            err => {
                throw new Error(err);
            }
        );
};
