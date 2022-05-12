import { mount, shallow } from "enzyme/build";
import { Employees } from "../components/Employees";
import { AppContext } from "../context/EmployeesContext";
import { employees, setEmployees } from "./data";

// Employees Jest Tests
describe("Employees Component", () => {
  // should render without crashing.
  it("should render without crashing", () => {
    const wrapper = shallow(
      <AppContext.Provider>
        <Employees />
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  // should execute deleteEmployee function when click button.
  it("should execute deleteEmployee function when click button", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <Employees />
      </AppContext.Provider>
    );
    const emp = wrapper.find(Employees);
    const button = emp.find("button").first();
    button.simulate("click");
    expect(button.props().onClick).toBeDefined();
  });

  // should navigate to /edit-employee/:id when click button.
  it("should navigate to /edit-employee/:id when click button", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <Employees />
      </AppContext.Provider>
    );
    const emp = wrapper.find(Employees);
    const button = emp.find("button").last();
    button.simulate("click");
    expect(button.props().onClick).toBeDefined();
  });
});
