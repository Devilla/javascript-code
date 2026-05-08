/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, depth) {
    return arr.flat(depth);
};

console.log(flat([1,2,3,[4]], 1));
