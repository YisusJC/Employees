import { shallow } from "enzyme/build";
import App from "./App";

// React 15.6.1
// Describe App component
describe("App", () => {
  // Render App component
  it("should render without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
//# sourceMappingURL=app.test.js.map
