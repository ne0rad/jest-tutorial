const ceasar = require('../code/ceasar');

test('Encode with Ceasar Cipher 1', () => {
    expect(ceasar('hello world', 13)).toBe('uryyb jbeyq');
});

test('Encode with Ceasar Cipher 2', () => {
    expect(ceasar('HeLlO wOrLd', 20)).toBe('ByFfI qIlFx');
});

test('Encode with Ceasar Cipher 3', () => {
    expect(ceasar('Hello fella', -3)).toBe('Ebiil cbiix');
});