import {HashRouter} from 'react-router-dom';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

global.__DEV__ = !(process.env.NODE_ENV === 'production');

export const decorators = [
  (Story) => (<HashRouter><Story/></HashRouter>)
];