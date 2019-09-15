
global.mockFetch = {
    resolveWith: response => {
        return new Promise((resolve, reject) => resolve(response));
    }
};
