const { spaceHello } = require("./test3");

test("spaceHello", () => {
  expect(spaceHello(1)).toBe("h e l l o");
  expect(spaceHello(2)).toBe("h  e  l  l  o");
  expect(spaceHello(3)).toBe("h   e   l   l   o");
  expect(spaceHello(4)).toBe("h    e    l    l    o");
});
