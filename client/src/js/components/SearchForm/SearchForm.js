import createComponent from '../../lib/createComponent';

export default createComponent({
    propTypes: {
        focus: 'boolean',
        error: 'boolean',
        onSubmit: 'function',
        onInvalidSubmission: 'function'
    },

    template () {
        const errorMessage = this.props.error
            ? 'Please enter a search term.'
            : '';

        const errorClass = this.props.error ? 'error' : '';

        return (
            `<div class="search-area">
                <h3>Swearch our catalog</h3>
                <form class="search-form">
                    <input 
                        class="search-input ${errorClass}" 
                        id="search-input" 
                        name="search-input" 
                        tabindex="0"
                        placeholder="Enter a search term" />
                    <button type="submit">Go</button>
                </form>
                <p class="error-message">${errorMessage}</p>
            </div>`
        );
    },

    events: {
        '.search-input focus': function (e) {
            this.props.onFocus();
        },

        '.search-form submit': function (e) {
            e.preventDefault();
            const searchTerm = this.tree.$('.search-input').value;
            if (!searchTerm) {
                this.props.onInvalidSubmission();
            }
            else {
                this.props.onSubmit(searchTerm);
            }
        }
    },

    postRender: function () {
        if (this.props.focus) {
            const self = this;
            // this is ...unfortunate. with time i would come up with something better,
                // but unfortunately focus is not preserved when an unattached node
                // is attached to the dom.
            setTimeout(() => {
                self.tree.$('.search-input').focus();
            }, 50);
        };
    }
});
