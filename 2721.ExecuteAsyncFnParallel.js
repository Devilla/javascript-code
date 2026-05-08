/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let completed = 0;
        let settled = false;

        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then((value) => {
                    if (settled) return;

                    results[i] = value;
                    completed++;

                    if (completed === functions.length) {
                        settled = true;
                        resolve(results);
                    }
                })
                .catch((error) => {
                    if (settled) return;
                    settled = true;
                    reject(error);
                });
        }
    });
};


 const promise = promiseAll([() => new Promise(res => res(42))])
 promise.then(console.log); // [42]