import React, { Component } from 'react';
import Desktop from './Desktop';

class Navigation extends Component {
  state = {
    isOpen: false,
    position: 'right',
  };

  hamburgerClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen, position } = this.state;
    const { isFooterOpen, show, hide } = this.props;

    return (
      <div>
        <Desktop
          isOpen={isOpen}
          position={position}
          isFooterOpen={isFooterOpen}
          hide={hide}
          show={show}
          handleClick={this.hamburgerClick}
        />
      </div>
    );
  }
}

export default Navigation;
