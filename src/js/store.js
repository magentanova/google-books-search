const initalState = {
    books: [],
    resultsMessage: '',
    errorMessage: '',
    loading: false
};

const store = {
    events: {},
    data: initalState
};

store.get = attr => store.data[attr];

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

export default store;
