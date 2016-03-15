/* @flow */
import React, { Component, PropTypes } from 'react';

import classNames from 'classnames';

class <%= component.className %> extends Component {
  static propTypes = {
    className: PropTypes.string,

  };

  static defaultProps = {

  };

  constructor(props: any) {
    super(props);

    this.state = {
    };
  }

  state: {
  };

  render(): ?React.Element {
    const {
      className,
    } = this.props;

    return (
      <div className={classNames('', className)}>
      </div>
    );
  }
}

export default <%= component.className %>;
