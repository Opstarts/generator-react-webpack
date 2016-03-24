/* eslint-env node, mocha */
/* eslint no-console: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import <%= component.className %> from '../../<%= test.relativePath %>src/<%= component.webpackPath %>';

describe('<<%= component.className %>>', () => {
  beforeEach(() => {
  });

  it('renders with CSS class name "<%= component.styleName %>"', () => {
    const component = shallow(
      <<%= component.className %>

      />
    );

    expect(component.is('.<%= component.styleName %>')).to.equal(true);
  });
});
