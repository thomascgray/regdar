# Regdar

A scraper and data aggregator for [D&D Beyond](http://www.dndbeyond.com/)

Allows you to query D&D Beyond for various data entities based on IDs.

## Local Dev

- `npm i`
- `npm test`

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
{
    abilities: {},
    description: {
        name: "Tordek",
        gender: "Male", 
        faith: "Gargamaal",
        age: 60,
    },
    hair: "Greying Black",
    eyes: "Black",
    skin: "Grey",
    height: "6' 8''",
    weight: 200,
    inspiration: false,
    baseHitPoints: 8,
    bonusHitPoints: null,
    overrideHitPoints: null,
    removedHitPoints: 5,
    temporaryHitPoints: 0,
    currentXp: 0,
    alignmentId: 6,
}
```

