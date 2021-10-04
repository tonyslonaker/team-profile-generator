const systemsEngineer = require("../lib/stystemsEngineer.js");

test("GitHub account per const", () => {
  const testValue = "GitHubUser";
  const e = new systemsEngineer("Foo", 1, "", testValue);
  expect(e.gitHub).toBe(testValue);
});

test("getRole() and return \"systemsEngineer\"", () => {
  const testValue = "systemsEngineer";
  const e = new systemsEngineer("Foo", 1, "", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});