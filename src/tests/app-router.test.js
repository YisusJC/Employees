import { mount, shallow } from "enzyme/build";
import { AppRouter } from "../router/AppRouter";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

// App Router Jest tests
describe("App Router Component", () => {
  // should render without crashing.
  it("should render without crashing", () => {
    const wrapper = shallow(<AppRouter />);
    expect(wrapper).toMatchSnapshot();
  });
});
