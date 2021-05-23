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
    let keys: any = [];
    for (let [key, value] of Object.entries(inObject)) {
        console.log({value, key});
        if (value === forValue) {
            keys.push(key);
        }
        if (typeof value === typeof {}) {
            keys = [...keys, ...getAllKeys(forValue, value)];
        }
    }
    return keys;
}

export {
    getAllKeys
};
