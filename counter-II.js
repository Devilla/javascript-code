function createCounter(init) {
    var count = init;
    return {
        increment: function () {
            ++count;
            return count;
        },
        decrement: function () {
            --count;
            return count;
        },
        reset: function () {
            count = init;
	    return count;
        },
    };
}
;
var counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
