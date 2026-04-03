/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
        return function(x) {
     	   functions.reduceRight((acc,fn) => fn(acc),x);
    }
};

const fn = compose([x => x + 1, x => 2 * x])

console.log(fn(4)); // not 9 but undefined 

