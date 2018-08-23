# Regdar

A scraper and data aggregator for [D&D Beyond](http://www.dndbeyond.com/)

Allows you to query D&D Beyond for various data entities based on IDs.

## Local Dev

- `npm i`
- `npm test` to run the tests, or `node sandbox/index.js` and play around with the sandbox environment

## Using the library

1. First bring the library in

```js
const Regdar = require('regdar');
```

2. Call the function you need

```js
Regdar.getCharacter(0123456789)
    .then(character => {
        // use character as you want
    });
```

## API

### getCharacter(characterId) : Promise

Resolves to a character object.

Character object schema below

```js
// As of v1.0.1
{
  name: 'Bhaal',
  race: 'Half-Orc',
  class: 'Warlock 1',
  classes: [
    {
      level: 1,
      name: 'Warlock'
    }
  ],
  abilities: {
    str: {
      modifier: -2,
      score: 6
    },
    dex: {
      modifier: 0,
      score: 11
    },
    con: {
      modifier: 2,
      score: 14
    },
    int: {
      modifier: 1,
      score: 12
    },
    wis: {
      modifier: 1,
      score: 12
    },
    cha: {
      modifier: 3,
      score: 17
    }
  }
}
```

