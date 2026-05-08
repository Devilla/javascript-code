/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const byId = new Map();

    for (const obj of arr1) {
        byId.set(obj.id, { ...obj });
    }

    for (const obj of arr2) {
        if (byId.has(obj.id)) {
            byId.set(obj.id, { ...byId.get(obj.id), ...obj });
        } else {
            byId.set(obj.id, { ...obj });
        }
    }

    return Array.from(byId.values()).sort((a, b) => a.id - b.id);
};
arr1 = [{"id": 1,"x": 1},{"id": 2,"x": 9}]
arr2 = [{"id": 3,"x": 5}]
console.log(join(arr1,arr2));
