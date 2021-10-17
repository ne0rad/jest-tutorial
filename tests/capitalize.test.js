const capitalize = require('../code/capitalize');

test('Capitalize the first letter', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});