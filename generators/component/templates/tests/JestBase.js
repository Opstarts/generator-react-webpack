/* eslint-env expect, jest */
/* eslint no-console:0, react/jsx-closing-bracket-location:0, global-require:0 */
import React from 'react';
import renderer from 'react-test-renderer';

import <%= component.className %> from './<%= component.className %>';

describe('<<%= component.className %>>', function() {
  it('renders', function() {
    const component = renderer.create(
      <<%= component.className %>

      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
