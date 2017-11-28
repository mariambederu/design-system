import PropTypes from 'prop-types';
import React from 'react';

export class StepLink extends React.PureComponent {
  handleClick(event) {
    if (this.props.onEnterStep) {
      event.preventDefault();
      this.props.onEnterStep(this.props.route);
    }
  }

  render() {
    const { route, screenReaderText, className, children } = this.props;
    const onClick = event => this.handleClick(event);
    return (
      <a href={route} onClick={onClick} className={className}>
        {children}
        <span className="ds-u-visibility--screen-reader">
          {' '}
          {screenReaderText}
        </span>
      </a>
    );
  }
}

StepLink.propTypes = {
  /**
   * Label text or HTML.
   */
  children: PropTypes.node.isRequired,
  route: PropTypes.string.isRequired,
  screenReaderText: PropTypes.string,
  className: PropTypes.string,
  onEnterStep: PropTypes.func
};

export default StepLink;