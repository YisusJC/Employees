import { mount, shallow } from "enzyme/build";
import { Header } from "./Header";

// Header Jest tests
describe("Header Component", () => {
  // should render without crashing.
  it("should render without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  // should h1 redirect to home page.
  it("should h1 redirect to home page", () => {
    const wrapper = mount(<Header />);
    const h1 = wrapper.find("h1");
    h1.simulate("click");
    expect(h1.props().onClick).toBeDefined();
  });

  // should input received just string values.
  it("should input received just string values", () => {
    const wrapper = mount(<Header />);
    let input = wrapper.find("#search-input");
    input.simulate("change", {
      target: {
        value: "Jaime",
      },
    });
    input = wrapper.find("#search-input");
    expect(input.props().value).toBe("Jaime");
  });

  // should button navigate to '/' if input is empty.
  it("should button navigate to '/' if input is empty", () => {
    const wrapper = mount(<Header />);
    let input = wrapper.find("#search-input");
    input.simulate("change", {
      target: {
        value: "",
      },
    });
    input = wrapper.find("#search-input");
    expect(input.props().value).toBe("");
    const button = wrapper.find("button").first();
    button.simulate("click");
    expect(button.props().onClick).toBeDefined();
  });

  // should redirect to /search/:sp if input value is more than 1 character.
  it("should navigate to /search/:sp if input value is more than 1 character", () => {
    const wrapper = mount(<Header />);
    let input = wrapper.find("#search-input");
    input.simulate("change", {
      target: {
        value: "Jaime",
      },
    });
    input = wrapper.find("#search-input");
    expect(input.props().value).toBe("Jaime");
    const button = wrapper.find("button").last();
    button.simulate("click");
    expect(button.props().onClick).toBeDefined();
  });
});
