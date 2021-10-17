const calculator = require('../code/calculator');

test('Adds two positive numbers', () => {
    expect(calculator.add(1,2)).toBe(3);
});
test('Substract one number from another', () => {
    expect(calculator.substract(5, 3)).toBe(2);
});
test('Divide two numbers', () => {
    expect(calculator.divide(9, 3)).toBe(3);
});
test('Multiply two numbers', () => {
    expect(calculator.multiply(9, 3)).toBe(27);
});