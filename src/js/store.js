const initalState = {
    books: [],
    booksLoaded: false,
    booksLoading: false,
    formInvalid: false,
    searchError: false
};

const store = {
    events: {},
    data: initalState
};

store.get = attr => store.data[attr];

store.getState = () => store.data;

store.set = obj => {
    store.data = Object.assign(store.data, obj);
    store.trigger('update');
};

store.on = (event, callback) => {
    const callbacks = store.events[event];
    store.events[event] = callbacks ? [...callbacks, callback] : [callback];
};

store.trigger = (event, ...args) => {
    store.events[event].forEach(handler => handler(...args));
};

export const updateStore = store.set.bind(store);

export default store;
