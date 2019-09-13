import createComponent from '../lib/createComponent';

// import BookList from './BookList';

export default createComponent({
    template () {
        return (
            `
            <div class="home-page">
                <div class="header">
                    <h1>Welcome to The Library</h1>
                    <i>Shhh!</i>
                </div>
                <div class="page-body">
                    <div class="search-area">
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
                    </div>
                    <div class="loading-area" >
                        <p class="loading-message"></p>
                        <div class="loading-gif"></div>
                    </div>
                </div>
            </div>`
        );
    },
    postRender () {
        // const bookListNode = this.renderChild(new BookList());
        // this.tree.querySelector('.page-body')
        //     .appendChild(
        //         bookListNode
        //     );
    }
});
