import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';
describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('return dollar formatted', () => {
    expect(toDollars(5)).toBe('$5.00');
    expect(toDollars(3.5)).toBe('$3.50');
    expect(toDollars(9.99)).toBe('$9.99');
  });
});

describe('divideBy', () => {
  it('divides all elements by the given divisor', () => {
    expect(divideBy([10, 20, 30], 10)).toEqual([1, 2, 3]);
  });
});

describe('multiplyBy', () => {
  it('multiplies only number values by the multiplier', () => {
    const input = { a: 2, b: 'hello', c: 5, d: true };
    const output = multiplyBy(input, 3);
    expect(output).toEqual({ a: 6, b: 'hello', c: 15, d: true });
  });
});
