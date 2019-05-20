function hello1(name) {
  if (name) {
    return 'hello ' + name
  }
  return 'Who are you?'
}

function hello2(firstname, lastname) {
  // TODO: Write code here
  if (firstname) {
    return `My name is ${firstname}${lastname ? ` ${lastname}` : ''}.`;
  } else {
    return `I have no firstname, but my lastname is ${lastname}.`;
  }
}

module.exports = { hello1, hello2 };
