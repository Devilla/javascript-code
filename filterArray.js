/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

function greaterThan10(n) { return n > 10; }

var filter = function(arr, fn) {
    // Apply `fn` as the predicate (like Array.prototype.filter) and return results.
    return arr.filter((value, index) => fn(value, index));
};

console.log(filter([
	0,10,20,30],
	greaterThan10
));
