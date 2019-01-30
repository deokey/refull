/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import classnames from 'classnames';
import { isIE11 } from '../../utils';

export default class FlipBox extends Component {
  state = {
    active: false,
  };

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.log('SCROLL');
    const { active } = this.state;
    const pageTopOffset = window.pageYOffset + parseFloat(window.outerHeight / 3.5);
    if (pageTopOffset > this.node.offsetTop && !active) {
      this.setState({
        active: true,
      });
    } else if (pageTopOffset < this.node.offsetTop && active) {
      this.setState({
        active: false,
      });
    }
  };

  render() {
    const { active } = this.state;
    const { bg, logo, title, children, handleClick } = this.props;
    console.log('VIENE BOX ENTERO', this.props);

    return (
      <div
        className={classnames('flipbox', isIE11 ? 'ie-support' : 'cubic-support', active && 'active')}
        ref={ref => (this.node = ref)}
        onClick={handleClick}
        role="presentation"
      >
        <div className="flipbox__content">
          <div
            className="flipbox__front-side"
            style={{
              backgroundImage: `url(${bg})`,
            }}
          >
            <div className="flipbox__innercontent">
              {logo && <img height="100" src={logo} alt={`${title} logo`} />}
              <h4>{title}</h4>
            </div>
          </div>
          <div
            className="flipbox__back-side"
            style={{
              backgroundImage: `url(${bg})`,
            }}
          >
            <div className="flipbox__innercontent">{children}</div>
          </div>
        </div>
      </div>
    );
  }
}
