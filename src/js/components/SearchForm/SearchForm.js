import createComponent from '../../lib/createComponent';

export default createComponent({
    template () {
        const errorMessage = this.props.error 
            ? 'Please enter a search term.'
            : '';
            
        const errorClass = this.props.error ? 'error' : '';

        return (
            `<div class="search-area">
                <h3>Search our catalog</h3>
                <form class="search-form">
                    <input 
                        class="search-input ${errorClass}" 
                        id="searchInput" 
                        name="searchInput" 
                        placeholder="Enter a search term" />
                    <button type="submit">Go</button>
                </form>
                <p class="error-message">${errorMessage}</p>
            </div>`
        );
    },

    events: {
        '.search-form submit': function(e){
            e.preventDefault();
            if (!this.tree.$('#searchInput').value) {
                this.props.onInvalidSubmission();
            }
            else {
                this.props.onSubmit();
            }
        }
    },
});
