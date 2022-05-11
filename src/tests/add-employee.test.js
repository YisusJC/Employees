import { AddEmployee } from "../components/AddEmployee";
import { mount, shallow } from "enzyme/build";
import { EmployeesContext } from "../context/EmployeesContext";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

// Add employee Jest tests
describe("Add employee Component", () => {
  // should render without crashing.
  it("should render without crashing", () => {
    const wrapper = shallow(
      <EmployeesContext.Provider>
        <AddEmployee />
      </EmployeesContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  // should execute saveEmployee function when click button.
  it("should execute saveEmployee function when click button", () => {
    const wrapper = mount(
      <EmployeesContext.Provider>
        <AddEmployee />
      </EmployeesContext.Provider>
    );
    const button = wrapper.find("button").first();
    button.simulate("click");
    expect(button.props().onClick).toBeDefined();
  });

  // should render and save input dni
  it("should render and save input dni", () => {
    const wrapper = mount(
      <EmployeesContext.Provider>
        <AddEmployee />
      </EmployeesContext.Provider>
    );
    const input = wrapper.find("#dni");
    input.simulate("input", {
      target: {
        value: "12345678",
      },
    });
    expect(input.props().value).toBe("12345678");
  });

  // should render and save input birth
  it("should render and save input birth", () => {
    const wrapper = mount(
      <EmployeesContext.Provider>
        <AddEmployee />
      </EmployeesContext.Provider>
    );
    const input = wrapper.find("#birth");
    input.simulate("input", {
      target: {
        value: "12/08/2022",
      },
    });
    expect(input.props().value).toBe("12/08/2022");
  });

  // should render and save input address
  it("should render and save input address", () => {
    const wrapper = mount(
      <EmployeesContext.Provider>
        <AddEmployee />
      </EmployeesContext.Provider>
    );
    const input = wrapper.find("#address");
    input.simulate("input", {
      target: {
        value: "Los Angeles, CA",
      },
    });
    expect(input.props().value).toBe("Los Angeles, CA");
  });

  // should render and save input phone
  it("should render and save input phone", () => {
    const wrapper = mount(
      <EmployeesContext.Provider>
        <AddEmployee />
      </EmployeesContext.Provider>
    );
    const input = wrapper.find("#phone");
    input.simulate("input", {
      target: {
        value: "5620192222",
      },
    });
    expect(input.props().value).toBe("5620192222");
  });

  // should render and save input email
  it("should render and save input email", () => {
    const wrapper = mount(
      <EmployeesContext.Provider>
        <AddEmployee />
      </EmployeesContext.Provider>
    );
    const input = wrapper.find("#email");
    input.simulate("input", {
      target: {
        value: "jesus.jimenez@aspiresys.com",
      },
    });
    expect(input.props().value).toBe("jesus.jimenez@aspiresys.com");
  });

  // should render and save input position
  it("should render and save input position", () => {
    const wrapper = mount(
      <EmployeesContext.Provider>
        <AddEmployee />
      </EmployeesContext.Provider>
    );
    const input = wrapper.find("#position");
    input.simulate("input", {
      target: {
        value: "Front-end Developer",
      },
    });
    expect(input.props().value).toBe("Front-end Developer");
  });
});
