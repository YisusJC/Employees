import { mount, shallow } from "enzyme/build";
import { Employees } from "../components/Employees";
import { EmployeesContext } from "../context/EmployeesContext";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

// Employees Jest Tests
describe("Employees Component", () => {
  // should render without crashing.
  it("should render without crashing", () => {
    const wrapper = shallow(
      <EmployeesContext.Provider>
        <Employees />
      </EmployeesContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  // shopuld execute delete employee function when click button.
  it("should execute delete employee function when click button", () => {
    const wrapper = mount(
      <EmployeesContext.Provider>
        <Employees />
      </EmployeesContext.Provider>
    );
    const button = wrapper.find("button").first();
    button.simulate("click");
    expect(button.props().onClick).toBeDefined();
  });
});
