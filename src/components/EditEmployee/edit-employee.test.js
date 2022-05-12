import { EditEmployee } from "./EditEmployee";
import { mount, shallow } from "enzyme/build";
import { AppContext } from "../../context/EmployeesContext";
import { employees, setEmployees } from "../../data";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "MBJ34368V12P5",
  }),
  useRouteMatch: () => ({ url: "/edit-employee/MBJ34368V12P5" }),
}));

// Add employee Jest tests
describe("Add employee Component", () => {
  // should render without crashing.
  it("should render without crashing", () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <EditEmployee />
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  // should execute saveEmployee function when click button.
  it("should execute saveEmployee function when click button", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <Router>
          <EditEmployee />
        </Router>
      </AppContext.Provider>
    );
    const editEmployee = wrapper.find(EditEmployee).first();
    const button = editEmployee.find("#save-employee");
    button.simulate("click");
    expect(button.props().onClick).toBeDefined();
  });

  // should navigate to / in case cancel save employee.
  it("should navigate to / in case cancel save employee", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <Router>
          <EditEmployee />
        </Router>
      </AppContext.Provider>
    );
    const editEmployee = wrapper.find(EditEmployee).first();
    const button = editEmployee.find("#cancel-employee");
    button.simulate("click");
    expect(button.props().onClick).toBeDefined();
  });

  // should generate DNI in case click button and save dni with setEmployee.
  it("should generate DNI in case click button", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <Router>
          <EditEmployee />
        </Router>
      </AppContext.Provider>
    );
    const editEmployee = wrapper.find(EditEmployee).first();
    const button = editEmployee.find("#generate-dni");
    button.simulate("click");
    expect(button.props().onClick).toBeDefined();
  });

  // should render and save input name
  it("should render and save input name", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <Router>
          <EditEmployee />
        </Router>
      </AppContext.Provider>
    );
    const editEmployee = wrapper.find(EditEmployee).first();
    const input = editEmployee.find("#name");
    expect(input.props().value).toBe("Jaime Armando Straus");
  });

  // should render and save input dni
  it("should render and save input dni", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <Router>
          <EditEmployee />
        </Router>
      </AppContext.Provider>
    );
    const editEmployee = wrapper.find(EditEmployee).first();
    const input = editEmployee.find("#dni");
    expect(input.props().value).toBe("MBJ34368V12P5");
  });

  // should render and save input birth
  it("should render and save input birth", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <Router>
          <EditEmployee />
        </Router>
      </AppContext.Provider>
    );
    const editEmployee = wrapper.find(EditEmployee).first();
    const input = editEmployee.find("#birth");
    expect(input.props().value).toBe("19/03/1998");
  });

  // should render and save input address
  it("should render and save input address", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <Router>
          <EditEmployee />
        </Router>
      </AppContext.Provider>
    );
    const editEmployee = wrapper.find(EditEmployee).first();
    const input = editEmployee.find("#address");
    expect(input.props().value).toBe("Los Angeles, CA");
  });

  // should render and save input phone
  it("should render and save input phone", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <Router>
          <EditEmployee />
        </Router>
      </AppContext.Provider>
    );
    const editEmployee = wrapper.find(EditEmployee).first();
    const input = editEmployee.find("#phone");
    expect(input.props().value).toBe("5628903455");
  });

  // should render and save input email
  it("should render and save input email", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <Router>
          <EditEmployee />
        </Router>
      </AppContext.Provider>
    );
    const editEmployee = wrapper.find(EditEmployee).first();
    const input = editEmployee.find("#email");
    expect(input.props().value).toBe("jaime.armando@aspiresys.com");
  });

  // should render and save input position
  it("should render and save input position", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <Router>
          <EditEmployee />
        </Router>
      </AppContext.Provider>
    );

    const editEmployee = wrapper.find(EditEmployee).first();
    const input = editEmployee.find("#position");
    expect(input.props().value).toBe("Front-end Developer");
  });

  // should render and save input name
  it("should render and save input name", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ employees, setEmployees }}>
        <Router>
          <EditEmployee />
        </Router>
      </AppContext.Provider>
    );
    const editEmployee = wrapper.find(EditEmployee).first();
    let input = editEmployee.find("#name");
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
        <Router>
          <EditEmployee />
        </Router>
      </AppContext.Provider>
    );
    const editEmployee = wrapper.find(EditEmployee).first();
    let input = editEmployee.find("#dni");
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
        <Router>
          <EditEmployee />
        </Router>
      </AppContext.Provider>
    );
    const editEmployee = wrapper.find(EditEmployee).first();
    let input = editEmployee.find("#birth");
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
        <Router>
          <EditEmployee />
        </Router>
      </AppContext.Provider>
    );
    const editEmployee = wrapper.find(EditEmployee).first();
    let input = editEmployee.find("#address");
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
        <Router>
          <EditEmployee />
        </Router>
      </AppContext.Provider>
    );
    const editEmployee = wrapper.find(EditEmployee).first();
    let input = editEmployee.find("#phone");
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
        <Router>
          <EditEmployee />
        </Router>
      </AppContext.Provider>
    );
    const editEmployee = wrapper.find(EditEmployee).first();
    let input = editEmployee.find("#email");
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
        <Router>
          <EditEmployee />
        </Router>
      </AppContext.Provider>
    );

    const editEmployee = wrapper.find(EditEmployee).first();
    let input = editEmployee.find("#position");
    input.simulate("change", {
      target: {
        value: "Front-end Developer",
      },
    });
    input = wrapper.find("#position");
    expect(input.props().value).toBe("Front-end Developer");
  });
});
