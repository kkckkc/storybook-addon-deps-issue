import { addParameters } from '@storybook/react';
import { DocsPage } from 'storybook-addon-deps/blocks';

addParameters({
  docs: { page: DocsPage },
  dependencies: { withStoriesOnly: false, hideEmpty: false }
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}