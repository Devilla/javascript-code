/**
 * Convert a string like "a.b.c.d.e" into an object structure like { a: { b: { c: { d: { e: {} } } } } }:
 * @param str 
 * @returns nested object
 */
function stringToNestedObject(str) {
    // Split the string by dots
    const arr = str.split('.');
    
    // Start with an empty object
    let result = {};
    
    // Keep track of the current object we're building
    let current = result;
    
    // Iterate through all keys except the last one
    for (let i = 0; i < arr.length - 1; i++) {
        // Create a new empty object for the current key
        current[arr[i]] = {};
        // Move to the next level
        current = current[arr[i]];
    }
    
    // Set the last key with an empty object
    current[arr[arr.length - 1]] = {};
    
    return result;
}

// Example usage:
const str = "a.b.c.d.e";
const nestedObject = stringToNestedObject(str);
console.log(JSON.stringify(nestedObject, null, 2));