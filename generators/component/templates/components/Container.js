/* @flow */
import React, { Component } from 'react';

import classNames from 'classnames';

import <%= component.className %> from './<%= component.className %>';

export type Props = {
  className: ?string;
};

type State = {
};

class <%= component.className %>Container extends Component {
  static defaultProps = { };

  constructor(props: Props) {
    super(props);
  }

  props: Props;

  state: State = {
  };

  render(): ?React.Element {
    const {
      className,
    } = this.props;

    return (
      <<%= component.className %>
        {...this.props}
        {...{
        }}
      />
    );
  }
}

export default <%= component.className %>Container;
