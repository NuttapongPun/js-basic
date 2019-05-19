const { hello1, hello2 } = require("./test1");

test("hello1", () => {
  expect(hello1("world")).toBe("hello world");
  expect(hello1("Jon")).toBe("hello Jon");
  expect(hello1("")).toBe("Who are you?");
});

test("hello2", () => {
  expect(hello2("Jon", "Snow")).toBe("My name is Jon Snow.");
  expect(hello2("Marry", "Jane")).toBe("My name is Marry Jane.");
  expect(hello2("Jon")).toBe("My name is Jon.");
  expect(hello2("Marry")).toBe("My name is Marry.");
  expect(hello2("", "Snow")).toBe(
    "I have no firstname, but my lastname is Snow."
  );
  expect(hello2("", "Jane")).toBe(
    "I have no firstname, but my lastname is Jane."
  );
});
