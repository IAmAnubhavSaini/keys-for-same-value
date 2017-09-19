function getAllKeys(forValue, inObject) {
    var keys = []
    for (let key of Object.keys(inObject)) {
        if (inObject[key] === forValue) {
            keys.push(key)
        }
    }
    return keys
}
