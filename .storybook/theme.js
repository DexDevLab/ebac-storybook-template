import { create } from "@storybook/theming/create";

export default create({
  base: "dark",
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  brandTitle: "Coleção de Pokémons - Storybook",
  brandUrl: "https://example.com",
  brandImage: "./logo.svg",
  brandTarget: "_self",

  //
  colorPrimary: "#ffffff",
  colorSecondary: "#000000",

  // UI
  appBg: "#ffffff",
  appContentBg: "#000000",
  appPreviewBg: "#ffffff",
  appBorderColor: "#ffffff",
  appBorderRadius: 4,

  // Text colors
  textColor: "#ffffff",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#ffffff",
  barSelectedColor: "#ffffff",
  barHoverColor: "#ffffff",
  //barBg: '#ffffff',

  // Form colors
  //inputBg: '#ffffff',
  inputBorder: "#ffffff",
  inputTextColor: "#ffffff",
  inputBorderRadius: 2,
});
