
global.mockFetch = {
    clear: () => {
        global.fetch = undefined;
    },
    rejectWith: error => {
        global.fetch = () => new Promise(
            (resolve, reject) => reject(error)
        );
    },
    resolveWith: (response) => {
        global.fetch = () => new Promise(
            (resolve, reject) => resolve(response)
        );
    }
};
