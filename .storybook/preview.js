import { themes } from '@storybook/theming';
import theme from './theme';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    docs: {
      theme: theme,
    },
  },
};

export default preview;
