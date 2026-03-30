/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
        // Apply `fn` to each element (and pass the index as well, like Array.prototype.map).
        // Return the transformed array.
        return arr.map((value, index) => fn(value, index));
};

function plusone(n) { return n + 1; }

console.log(map([1,2,3],plusone))
