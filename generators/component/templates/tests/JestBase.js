/* eslint-env expect, jest */
/* eslint no-console:0, react/jsx-closing-bracket-location:0, global-require:0 */
import React from 'react';
import renderer from 'react-test-renderer';

import <%= component.className %> from './<%= component.className %>';
import OpstartsThemeProvider from '<%= test.relativePath %>theme';

describe('<<%= component.className %>>', function() {
  it('renders', function() {
    const component = renderer.create(
      <OpstartsThemeProvider>
        <<%= component.className %>

        />
      </OpstartsThemeProvider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
