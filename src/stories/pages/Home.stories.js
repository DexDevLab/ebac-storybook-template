import Home from "./Home";

export default {
  title: "Pages/Home",
  component: Home,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  render: () => <Home />,
};
