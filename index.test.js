import { increment, decrement, multiple, divide } from './index'

test('Test increment', () => {
  expect(increment(1, 2)).toBe(3)
})
test('Test decrement', () => {
  expect(decrement(3, 2)).toBe(1)
})
test('Test multiple', () => {
  expect(multiple(3, 2)).toBe(6)
})
test('Test divide', () => {
  expect(divide(4, 2)).toBe(2)
})
