const { add, sub } = require('./sum');


test('adds 2 + 3 = 5', () => {
expect(add(2,3)).toBe(5);
});


test('subtracts 5 - 3 = 2 (intentional Pass)', () => {
expect(sub(5,3)).toBe(2);
});