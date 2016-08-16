/* @flow */
import React, { Component } from 'react';

import classNames from 'classnames';
import autobind from 'autobind-decorator';
import {
  observer,
  inject,
} from 'mobx-react';

export type Props = {
  className?: string;
};

@inject('')
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
