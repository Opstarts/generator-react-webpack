/* @flow */
import React, { Component } from 'react';

import classNames from 'classnames';

export type Props = {
  className: ?string;
};

type State = {
};

class <%= component.className %> extends Component {
  static defaultProps = { };

  constructor(props: any) {
    super(props);
  }

  state: State = {
  };

  props: Props;

  render(): ?React.Element {
    const {
      className,
    } = this.props;

    return (
      <div
        className={classNames('<%= component.styleName %>', className)}
      >

      </div>
    );
  }
}

export default <%= component.className %>;
