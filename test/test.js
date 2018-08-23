const assert = require('assert');
const { expect } = require('chai');
const Regdar = require('../src/index')


describe('Character', function () {
    it('getCharacter', done => {
        Regdar.getCharacter(4652234)
            .then(character => {
                expect(character).to.exist;
                expect(character.name).to.exist;
                expect(character.name).to.equal('Bhaal');
                done();
            })
    });
});