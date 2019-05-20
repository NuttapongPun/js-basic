function spaceHello(number) {
  // TODO: Debug this code
  let space = "";
  for (let i = 0; i < number; i++) {
    space += " ";
  }

  const hello = "hello";
  let text = "";
  for (let i = 0; i < hello.length; i++) {
    if (i === 0) {
      text += hello[i];
    } else {
      text += space + hello[i];
    }
  }
  return text;
}

module.exports = { spaceHello };
