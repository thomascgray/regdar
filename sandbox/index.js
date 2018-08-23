const Regdar = require('../src/index');

Regdar.getCharacter(4652234)
    .then(character => {
        console.log('character', character);
    })