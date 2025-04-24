/* Find the indices (positions = index + 1 ) of maximum number in an array in decending order If you want to find the indices of array elements sorted in descending order by value, here’s a clean JavaScript solution:

Example:
Input: [4, 8, 1, 8, 2, 5]
Output: [1, 3, 5, 0, 4, 2]
(These are indices sorted by the values they point to, in descending order)

*/
function getIndicesInDescendingOrder(arr) {
    // Create array of [value, index] pairs
    const indexedArray = arr.map((value, index) => ({ value, index }));

    // Sort by value in descending order
    indexedArray.sort((a, b) => b.value - a.value);

    // Extract the indices in sorted order
    return indexedArray.map(item => item.index+1);
}

// Example usage
const array = [4, 8, 1, 8, 2, 5];
const result = getIndicesInDescendingOrder(array);

console.log("Indices sorted by values (descending):", result);
