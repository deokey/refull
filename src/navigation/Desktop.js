import React from 'react';
import styled from 'styled-components';
import MenuBubble from './MenuBubble';
import Hamburger from './Hamburger';

const SideButton = styled.div`
  width: 45px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${props => props.position === 'left' && '0'};
  right: ${props => props.position === 'right' && '0'};
  justify-content: center;
  align-items: center;
  background-color: #f1f2f6;
  cursor: pointer;
  z-index: 999;
  border-right: 1px solid #f8f8f8;
  transition: 500ms;
  display: ${props => (props.isFooterOpen ? 'none' : 'flex')};
`;

const Desktop = props => {
  const { isOpen, position, isFooterOpen, handleClick } = props;
  return (
    <React.Fragment>
      <SideButton position={position} isFooterOpen={isFooterOpen}>
        <Hamburger handleClick={handleClick} isOpen={isOpen} position={position} />
      </SideButton>
      <MenuBubble isOpen={isOpen && !isFooterOpen} position={position} />
    </React.Fragment>
  );
};

export default Desktop;
