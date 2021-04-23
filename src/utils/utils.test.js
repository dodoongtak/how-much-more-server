import {
  converToPyeong,
} from './utils';

test('covertToPyeong', () => {
  const size = 129.92;

  expect(converToPyeong(size)).toBe(39);
});
