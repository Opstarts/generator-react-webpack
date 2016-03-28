/* @flow */
import React, { Component } from 'react';

import classNames from 'classnames';

export type Props = {
  className?: string;
};

type State = {
};

class <%= component.className %> extends Component {
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
    const cx = classNames('<%= component.styleName %>', className);

    return (
      <div
        className={cx}
      >

      </div>
    );
  }
}

export default <%= component.className %>;
