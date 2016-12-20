/* eslint-env expect, jest */
/* eslint no-console:0 react/jsx-closing-bracket-location:0 */
import React from 'react';
import renderer from 'react-test-renderer';

// Bug in jest
const <%= component.className %> = require('./<%= component.webpackPath %>').default;
// import <%= component.className %> from './<%= component.webpackPath %>';

it('<<%= component.className %>> renders', () => {
  const component = renderer.create(
    <<%= component.className %>

    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

