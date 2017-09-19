# Keys for same value

Get all the keys for a given value in an object.

```bash

    npm i -S keys-for-same-value

```

```javascript

    const getAllKeys = require('keys-for-same-value').getAllKeys

    ggetAllKeys('faf', { 'f':'faf', 'fa': 'faf', 'faf': 'faf', 'fafa':'fafa'})
    // returns
    // ["f", "fa", "faf"]

```

## Testing

`jasmine`

## License

MIT &copy; Git Faf 2017
