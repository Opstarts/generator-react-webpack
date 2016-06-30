/* @flow */
import React, { Component } from 'react';

import classNames from 'classnames';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';

export type Props = {
  className?: string;
};

@observer
class <%= component.className %> extends Component {
  static defaultProps = { };

  constructor(props: Props) {
    super(props);
  }

  props: Props;

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
