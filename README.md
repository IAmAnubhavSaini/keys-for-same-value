# Keys for same value

Get all the keys that have a given value; anywhere in an object.

```bash

    npm i -S keys-for-same-value

```

```javascript

const {getAllKeys} = require('keys-for-same-value');

getAllKeys('faf', {'f': 'faf', 'fa': 'faf', 'faf': 'faf', 'fafa': 'fafa'})
// returns
// ["f", "fa", "faf"]

```

## Testing

`jasmine` or `npm run test`

## License

MIT &copy; Git Faf 2017
