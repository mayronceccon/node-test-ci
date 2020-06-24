import Sum from '../src/Ope'

test("adds 1 + 2 to equal 3", () => {
  expect(new Sum().soma(1, 2)).toBe(3);
});
