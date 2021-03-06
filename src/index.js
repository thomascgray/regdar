const Axios = require('axios');

/**
 * the ability scores dont come back with names for some insane reason, so we manually keep a map
 */
const abilityScoreMap = {
    1: 'str',
    2: 'dex',
    3: 'con',
    4: 'int',
    5: 'wis',
    6: 'cha',
}

/**
 * calculate the modifier for a given ability score
 * @param {number} value the ability score
 */
const calculateAbilityScoreModifier = value => {
    return Math.floor((value - 10) / 2);
};

/**
 * extract an object of ability scores from the raw character json
 * @param {object} json the raw character json from dndbeyond
 */
const extractAbilityScores = json => {
    return json.stats.reduce((acc, cur) => {
        acc[abilityScoreMap[cur.id]] = {
            modifier: calculateAbilityScoreModifier(cur.value),
            score: cur.value
        };
        return acc;
    }, {});
}

const extractClasses = json => {
    return json.classes.map(rawClass => {
        return {
            level: rawClass.level,
            name: rawClass.definition.name,
        };
    });
}

const simplifyClasses = classes => {
    return classes.map(c => `${c.name} ${c.level}`).join(' | ');
}

const getCharacter = characterId => {
    return Axios.get(`https://www.dndbeyond.com/character/${characterId}/json`)
        .then(res => {
            const character = {
                name: res.data.name,
                race: res.data.race.fullName,
                class: simplifyClasses(extractClasses(res.data)),
                classes: extractClasses(res.data),
                abilities: extractAbilityScores(res.data),
            };
            return character;
        })
}

module.exports = {
    getCharacter
}