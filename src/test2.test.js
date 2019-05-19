const {multipleHello, multipleTextByCharacter} = require('./test2')

test("multipleHello", () => {
  expect(multipleHello(2)).toBe('hellohello');
  expect(multipleHello(3)).toBe('hellohellohello');
});

test('multipleHello2', () => {
  expect(multipleTextByCharacter('hello', 'l')).toBe('hellohello')
  expect(multipleTextByCharacter('hellooo', 'o')).toBe('hellooohellooohelooo')
  expect(multipleTextByCharacter('easy', 'e')).toBe('easy')
  expect(multipleTextByCharacter('right', 'x')).toBe('')
})
