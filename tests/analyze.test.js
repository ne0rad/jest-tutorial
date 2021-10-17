const analyze = require('../code/analyze');

test('Analize the array 1', () => {
    expect(analyze([1, 3, 5, 4, 7])).toEqual({
        average: 4,
        min: 1,
        max: 7,
        length: 5
    });
});

test('Analize the array 2', () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});