import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import items from './items';

const Wrapper = styled.div`
  position: fixed;
  width: 400px;
  height: 100vh;
  top: 0;
  left: ${props => props.position === 'left' && '45px'};
  right: ${props => props.position === 'right' && '45px'};
  overflow-y: auto;
  overflow-x: hidden;
  opacity: 0;
  visibility: hidden;
  z-index: 99;
  transition-delay: 300ms;
  ${props => props.isOpen && WrapperActiveCSS} ${props => props.isOpen && InnerActiveCSS};

  @media screen and (max-width: 980px) {
    display: none;
  }
`;

const Inner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: ${props => props.position === 'left' && '0'};
  right: ${props => props.position === 'right' && '0'};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 1rem;
  list-style-type: none;
  -webkit-transform: ${props => props.position === 'left' && 'translateX(-100%)'};
  transform: ${props => props.position === 'left' && 'translateX(-100%)'};
  -webkit-transform: ${props => props.position === 'right' && 'translateX(100%)'};
  transform: ${props => props.position === 'right' && 'translateX(100%)'};
  transition: background-color 0s linear 300ms, -webkit-transform 300ms linear;
  transition: transform 300ms linear, background-color 0s linear 300ms;
  transition: transform 300ms linear, background-color 0s linear 300ms, -webkit-transform 300ms linear;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: ${props => props.position === 'right' && '0'};
    right: ${props => props.position === 'left' && '0'};
    background-color: #833471;
    border-radius: 50%;
    z-index: -1;
    transition: all 300ms linear;
  }
`;

const Item = styled.a`
  color: #fff;
  margin-top: 1rem;
  text-decoration: none;
  width: 100%;
  padding: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    box-shadow: inset 0px 0px 80px 0px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }
`;

const elasticLeft = keyframes`
  0% {
    border-radius: 50%;
  }
  45% {
    border-radius: 0;
  }
  65% {
    border-top-right-radius: 40px 50%;
    border-bottom-right-radius: 40px 50%;
  }
  80% {
    border-radius: 0;
  }
  90% {
    border-top-right-radius: 20px 50%;
    border-bottom-right-radius: 20px 50%;
  }
  100% {
    border-radius: 0;
  }
`;

const elasticRight = keyframes`
  0% {
    border-radius: 50%;
  }
  45% {
    border-radius: 0;
  }
  65% {
    border-top-left-radius: 40px 50%;
    border-bottom-left-radius: 40px 50%;
  }
  80% {
    border-radius: 0;
  }
  90% {
    border-top-left-radius: 20px 50%;
    border-bottom-left-radius: 20px 50%;
  }
  100% {
    border-radius: 0;
  }
`;

const WrapperActiveCSS = css`
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
`;

const InnerActiveCSS = css`
  ${Inner} {
    background-color: #833471;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    transition: background-color 0s linear 599ms, -webkit-transform 300ms linear;
    transition: transform 300ms linear, background-color 0s linear 599ms;
    transition: transform 300ms linear, background-color 0s linear 599ms, -webkit-transform 300ms linear;

    &::after {
      width: 300%;
      border-radius: 50%;
      -webkit-animation: ${props =>
        props.position === 'left' &&
        css`
          ${elasticLeft} 150ms ease 300.5ms both;
        `};
      animation: ${props =>
        props.position === 'left' &&
        css`
          ${elasticLeft} 150ms ease 300.5ms both;
        `};

      -webkit-animation: ${props =>
        props.position === 'right' &&
        css`
          ${elasticRight} 150ms ease 300.5ms both;
        `};
      animation: ${props =>
        props.position === 'right' &&
        css`
          ${elasticRight} 150ms ease 300.5ms both;
        `};
    }
  }
`;

// const LogoIcon = styled.img`
//   width: 80px;
//   height: 80px;
//   object-fit: cover;
//   margin-bottom: 3rem;
//   cursor: pointer;

//   &:hover {
//     -webkit-filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));
//     filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));
//   }
// `;

const MenuBubble = ({ isOpen, position }) => (
  <Wrapper isOpen={isOpen} position={position}>
    <Inner position={position}>
      {items.map(i => (
        <Item href={`#${i.page}`} key={i.page}>
          {i.page}
        </Item>
      ))}
    </Inner>
  </Wrapper>
);

export default MenuBubble;
