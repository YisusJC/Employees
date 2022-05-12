import { mount, shallow } from "enzyme/build";
import { AppRouter } from "../router/AppRouter";

// App Router Jest tests
describe("App Router Component", () => {
  // should render without crashing.
  it("should render without crashing", () => {
    const wrapper = shallow(<AppRouter />);
    expect(wrapper).toMatchSnapshot();
  });
});
