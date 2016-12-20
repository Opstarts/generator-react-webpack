/* eslint-env expect, jest */
/* eslint no-console:0 react/jsx-closing-bracket-location:0 */
import React from 'react';
import renderer from 'react-test-renderer';

// Bug in jest
const <%= component.className %> = require('./<%= component.className %>').default;
// import <%= component.className %> from './<%= component.webpackPath %>';

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
