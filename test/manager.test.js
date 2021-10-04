const manager = require("../lib/manager.js");

test("set office number via const", () => {
  const testValue = 100;
  const e = new manager("Foo", 1, "", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"manager\"", () => {
  const testValue = "manager";
  const e = new manager("Foo", 1, "", 100);
  expect(e.getRole()).toBe(testValue);
});

test("getOfficeNumber from getOffice()", () => {
  const testValue = 100;
  const e = new manager("Foo", 1, "", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});