/* eslint-env expect, jest */
/* eslint no-console:0, react/jsx-closing-bracket-location:0 */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'mobx-react';

import <%= component.className %> from './<%= component.className %>';
import OpstartsThemeProvider from './<%= test.relativePath %>theme';
import store from '<%= test.relativePath %>../../stores/store';

jest.mock('<%= test.relativePath %>../../stores/store');

describe('<<%= component.className %>>', function() {
  it('renders', function() {
    const component = renderer.create(
      <Provider
        {...store}
      >
        <OpstartsThemeProvider>
          <<%= component.className %>

          />
        </OpstartsThemeProvider>
      </Provider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
