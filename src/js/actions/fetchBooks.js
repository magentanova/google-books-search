import { formatQueryURL } from '../utils';
import { SEARCH_URL } from '../settings';

export default query => {
    fetch(formatQueryURL(SEARCH_URL, query))
        .then(
            resp => resp.json(),
            err => console.error("error reading response", err)
        )
        .then(
            json =>{
                clearLoadingState();
                renderBooksResponse(json);
            },
            err => console.error("error reading json", err)
        );
}
