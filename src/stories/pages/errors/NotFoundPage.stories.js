import NotFoundPage from "./NotFoundPage";

export default {
  title: "Pages/Errors/404Page",
  component: NotFoundPage,
  parameters: {
    layout: "centered",
  }
};

export const Default = {
  render: () => <NotFoundPage />,
};
