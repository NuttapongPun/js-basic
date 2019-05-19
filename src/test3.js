function spaceHello(number) {
  // TODO: Debug this code
  let space = "";
  for (let i = 0; i < number; i++) {
    space += " ";
  }

  const hello = "hello";
  let text = "";
  for (let i = 0; i < hello.length; i++) {
    text += hello[i] + space;
  }
  return text;
}

module.exports = { spaceHello };
