// const { calculateTotal } = require('../src/calculate');
import calculateTotal from '../calculate';

test('calculateTotal sum without discount', () => {
  const list = [
    {
      id: 456,
      name: 'War and Peace',
      price: 400,
      count: 3,
    },
    {
      id: 77,
      name: 'JavaScript',
      price: 1300,
      count: 1,
    },
  ];

  const result = calculateTotal(list);
  expect(result).toBe(2500);
});

test('calculateTotal sum with discount', () => {
  const list = [
    {
      id: 456,
      name: 'War and Peace',
      price: 401,
      count: 3,
    },
    {
      id: 77,
      name: 'JavaScript',
      price: 1300,
      count: 1,
    },
  ];

  const result = calculateTotal(list, true);
  expect(result).toBeCloseTo(2230.173);
});
