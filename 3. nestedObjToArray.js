/**
 * NestedObjectToString {a:{b:{c:{d:e}}}} -> a.b.c.d.e
 * 
 */

function NestedObjectToString(obj) {
    let result = [];
    
    function recursive(current, path = '') {
        for (const key in current) {
            const newPath = path ? `${path}.${key}` : key;
            if (typeof current[key] === 'object' && current[key] !== null) {
                recursive(current[key], newPath);
            }
            result.push(newPath);
        }
    }
    
    recursive(obj);
    str = result[0]
    return str; // Return the last (longest) path
}

const nestedObject = {
    a: {
        b: {
            c: {
                d: {
                    e: {}
                }
            }
        }
    }
};

const nestedObjectToString = NestedObjectToString(nestedObject);
console.log("Result:", nestedObjectToString); // Should output: "Result: a.b.c.d.e"
