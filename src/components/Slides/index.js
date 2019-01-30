import React, { Component } from 'react';
import Slider from 'react-slick';
import './styles.css';

export default class Slides extends Component {
  render() {
    const { children } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      autoplay: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      adaptiveHeight: true,
      fade: true,
    };
    return <Slider {...settings}>{children}</Slider>;
  }
}
