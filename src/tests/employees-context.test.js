import { AppContext } from "../context/EmployeesContext";

// Employees Context Jest Tests
describe("Employees Context", () => {
  // should declarate EmployeesContext correctly.
  it("should declarate EmployeesContext correctly", () => {
    expect(AppContext).toBeDefined();
  });
});
