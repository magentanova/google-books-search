import createComponent from '../lib/createComponent';

export default createComponent({
    template () {
        return (
            `<div class="search-area">
                <h3>Search our catalog</h3>
                <form class="search-form">
                    <input 
                        class="search-input" 
                        id="searchInput" 
                        name="searchInput" 
                        placeholder="Enter a search term" />
                    <button type="submit">Go</button>
                </form>
                <p class="error-message"></p>
            </div>`
        );
    },

    events: {
        '.search-form submit': e => {
            e.preventDefault();
            console.log('submitted');
        }
    }
});
