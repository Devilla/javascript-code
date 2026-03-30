/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let acc = init;
    // Fold the array left-to-right using the provided reducer function.
    for (let i = 0; i < nums.length; i++) {
        acc = fn(acc, nums[i]);
    }
    return acc;
};

function sum(accum, curr) { return accum + curr; }

console.log(reduce([1,2,3,4],sum,0))
