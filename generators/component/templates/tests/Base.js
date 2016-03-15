/* eslint-env node, mocha */
/* eslint no-console: 0 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import <%= component.className %> from '<%= component.webpackPath %>';

describe('<%= component.className %>', () => {
  let component;

  beforeEach(() => {
  });

  it('', () => {
  });
});
