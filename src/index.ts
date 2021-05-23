/** function getAllKeys
 *
 * @param {*} forValue The value that has multiple keys
 * @param {Object} inObject The object under inspection
 * @returns {Array} Returns keys in an array
 *
 * @example
 *
 * getAllKeysFor('faf', { 'f':'faf', 'fa': 'faf', 'faf': 'faf', 'fafa':'fafa'})
 * returns: ["f", "fa", "faf"]
 */
function getAllKeys(forValue: any, inObject: any) {
    const keys = [];
    for (let key of Object.keys(inObject)) {
        const o = inObject[key];
        if (o === forValue) {
            keys.push(key);
        }
        if (typeof o === 'object') {
            keys.concat([...getAllKeys(forValue, o)]);
        }
    }
    return keys;
}

export {
    getAllKeys
};
