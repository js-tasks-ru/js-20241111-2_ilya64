/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    return function(obj) { 
        let propertiesArray = path.split('.');

        return getterRecursive(obj, propertiesArray);
    };
}

function getterRecursive(obj, propertiesArray) {
    const property = propertiesArray.shift();
    
    if (propertiesArray.length > 0) {
        if (Object.hasOwn(obj, property)) {
            const subobj = obj[property];

            return getterRecursive(subobj, propertiesArray);

        }
        else {
            return;
        }
    }
    else {
        if (Object.hasOwn(obj, property)) {
            return obj[property];
        }
        else {
            return;
        }
    }
}
