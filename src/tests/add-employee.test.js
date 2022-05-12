import { AddEmployee } from "../components/AddEmployee";
import { mount, shallow } from "enzyme/build";
import { AppContext } from "../context/EmployeesContext";
import { employees, setEmployees } from "./data";

// Add employee Jest tests
describe("Add employee Component", () => {
  // should render without crashing.
  it("should render without crashing", () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <AddEmployee />
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  // should execute saveEmployee function when click button.
  it("should execute saveEmployee function when click button", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <AddEmployee />
      </AppContext.Provider>
    );
    const addEmployee = wrapper.find(AddEmployee).first();
    const button = addEmployee.find("#save-employee");
    button.simulate("click");
    expect(button.props().onClick).toBeDefined();
  });

  // should render and save input name
  it("should render and save input name", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <AddEmployee />
      </AppContext.Provider>
    );
    const addEmployee = wrapper.find(AddEmployee).first();
    let input = addEmployee.find("#name");
    input.simulate("change", {
      target: {
        value: "Jaime Armando Straus",
      },
    });
    input = wrapper.find("#name");
    expect(input.props().value).toBe("Jaime Armando Straus");
  });

  // should render and save input dni
  it("should render and save input dni", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <AddEmployee />
      </AppContext.Provider>
    );
    const addEmployee = wrapper.find(AddEmployee).first();
    let input = addEmployee.find("#dni");
    input.simulate("change", {
      target: {
        value: "MBJ34368V12P5",
      },
    });
    input = wrapper.find("#dni");
    expect(input.props().value).toBe("MBJ34368V12P5");
  });

  // should render and save input birth
  it("should render and save input birth", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <AddEmployee />
      </AppContext.Provider>
    );
    const addEmployee = wrapper.find(AddEmployee).first();
    let input = addEmployee.find("#birth");
    input.simulate("change", {
      target: {
        value: "19/03/1998",
      },
    });
    input = wrapper.find("#birth");
    expect(input.props().value).toBe("19/03/1998");
  });

  // should render and save input address
  it("should render and save input address", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <AddEmployee />
      </AppContext.Provider>
    );
    const addEmployee = wrapper.find(AddEmployee).first();
    let input = addEmployee.find("#address");
    input.simulate("change", {
      target: {
        value: "Los Angeles, CA",
      },
    });
    input = wrapper.find("#address");
    expect(input.props().value).toBe("Los Angeles, CA");
  });

  // should render and save input phone
  it("should render and save input phone", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <AddEmployee />
      </AppContext.Provider>
    );
    const addEmployee = wrapper.find(AddEmployee).first();
    let input = addEmployee.find("#phone");
    input.simulate("change", {
      target: {
        value: "5628903455",
      },
    });
    input = wrapper.find("#phone");
    expect(input.props().value).toBe("5628903455");
  });

  // should render and save input email
  it("should render and save input email", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <AddEmployee />
      </AppContext.Provider>
    );
    const addEmployee = wrapper.find(AddEmployee).first();
    let input = addEmployee.find("#email");
    input.simulate("change", {
      target: {
        value: "jaime.armando@aspiresys.com",
      },
    });
    input = wrapper.find("#email");
    expect(input.props().value).toBe("jaime.armando@aspiresys.com");
  });

  // should render and save input position
  it("should render and save input position", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <AddEmployee />
      </AppContext.Provider>
    );

    const addEmployee = wrapper.find(AddEmployee).first();
    let input = addEmployee.find("#position");
    input.simulate("change", {
      target: {
        value: "Front-end Developer",
      },
    });
    input = wrapper.find("#position");
    expect(input.props().value).toBe("Front-end Developer");
  });
});
