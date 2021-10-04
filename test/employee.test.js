const employee = require("../lib/employee.js");

describe("employee", () => {
    it("Employee instance", () => {
        const e = new employee();
        expect(typeof(e)).toBe("object");
    });

    it("Set name via const arguments", () => {
        const name = "";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("Set id via const argument", () => {
        const testValue = 100;
        const e = new Employee("Foo", testValue);
        expect(e.id).toBe(testValue);
    });

    it("Set email via const argument", () => {
        const testValue = "";
        const e = new Employee("Foo", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe("getName", () => {
        it("get name via getName()", () => {
            const testValue = "";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("get id via getId()", () => {
            const testValue = 100;
            const e = new Employee("Foo", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("get email via getEmail()", () => {
            const testValue = "test@test.com";
            const e = new Employee("Foo", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() will return \"Employee\"", () => {
            const testValue = "Employee";
            const e = new employee("", 1, "");
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});