const reverseString = require('../code/reverseString');

test('Reverse a string', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});