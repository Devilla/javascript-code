/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, depth) {
    const result = [];
    const stack = [{ array: arr, index: 0, level: 0 }];

    while (stack.length > 0) {
        const frame = stack[stack.length - 1];

        if (frame.index >= frame.array.length) {
            stack.pop();
            continue;
        }

        const value = frame.array[frame.index++];

        if (Array.isArray(value) && frame.level < depth) {
            stack.push({ array: value, index: 0, level: frame.level + 1 });
        } else {
            result.push(value);
        }
    }

    return result;
};
