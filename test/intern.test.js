const intern = require("../lib/intern.js");

test("const", () => {
  const testValue = "";
  const e = new intern("Foo", 1, "", testValue);
  expect(e.gitHub).toBe(testValue);
});

test("getRole() should return \"intern\"", () => {
  const testValue = "intern";
  const e = new intern("Foo", 1, "email", "gitHub");
  expect(e.getRole()).toBe(testValue);
});

test("get gitHub username()", () => {
  const testValue = "";
  const e = new Intern("Foo", 1, "gitHub", testValue);
  expect(e.getgitHub()).toBe(testValue);
});