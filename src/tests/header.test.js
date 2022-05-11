import { mount, shallow } from "enzyme/build";
import { Header } from "../components/Header";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

// Header Jest tests
describe("Header Component", () => {
  // should render without crashing.
  it("should render without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  // should h1 redirect to home page with useNavigate
  it("should h1 redirect to home page with useNavigate", () => {
    const wrapper = mount(<Header />);
    const h1 = wrapper.find("h1");
    h1.simulate("click");
    expect(h1.props().onClick).toBeDefined();
  });

  // should render button with redirection to /add-employee with useNavigate
  it("should render button with redirection to /add-employee with useNavigate", () => {
    const wrapper = mount(<Header />);
    const button = wrapper.find("button").first();
    button.simulate("click");
    expect(button.props().onClick).toBeDefined();
  });

  // should input received just string values with useState()
  it("should input received just string values with useState", () => {
    const wrapper = mount(<Header />);
    const input = wrapper.find("input");
    input.simulate("input", {
      target: {
        value: "Jaime",
      },
    });
  });

  // should render button to redirect to /search/:sp if sp is more than 1 character
  it("should render button to redirect to /search/:sp if sp is more than 1 character", () => {
    const wrapper = mount(<Header />);
    const input = wrapper.find("input");
    input.simulate("input", {
      target: {
        value: "Jaime",
      },
    });
    const button = wrapper.find("button").last();
    button.simulate("click");
    expect(button.props().onClick).toBeDefined();
  });
});
