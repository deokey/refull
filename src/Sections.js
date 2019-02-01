import React from 'react';
import styled, { css } from 'styled-components';
import image1 from './assets/slide1.jpg';
import FlipBox from './components/Flipbox';
import Slides from './components/Slides';

// import * as images from './assets';

// section styles...
// const bgs = ['#db7093', '#663399', '#833471', '#4a69bd', '#16a085'];
// const st = bgs.map(bg => ({
//   className: 'section',
//   style: { textAlign: 'center', color: bg !== '' ? '#fffff' : '#000000', backgroundColor: bg || '#ffffff' },
// }));

const flipBoxes = [
  {
    title: '1',
    logo: '',
    message:
      'Para hacer una Transferencia Total, podrás depositar todo tu fondo disponible en Fondos Profuturo, en una entidad bancaria o en ambos según el porcentaje que tu decidas.'
  },
  {
    title: '2',
    logo: '',
    message: '2'
  },
  {
    title: '3',
    logo: '',
    message:
      'Para hacer una Transferencia Parcial, podrás depositar un porcentaje de tu fondo disponible en Fondos Profuturo o en una entidad bancaria y un porcentaje para tu pensión en cualquier modalidad de retiro.'
  }
];
export const Section = props => {
  const { scrollDown, section, scrollUp } = props;
  // const { styles, data } = section;
  // const { flipBoxes } = data;

  const style = {
    className: 'section',
    style: {
      textAlign: 'center',
      color: '#ffffff'
    }
  };
  console.log('PUCHAS', props, 'style>>>>', style);

  switch (section.type) {
    case 'flipbox':
      return (
        <div {...style}>
          <div className="container">
            <div>
              <h1>
                ¿Qué es Fondos<strong> Profuturo</strong>?
              </h1>
              <p>
                <strong>Fondos Profuturo (Aportes Sin Fin Previsional)</strong>{' '}
                es una excelente alternativa de inversión para tus ahorros a
                corto, mediano o largo plazo, que te permite realizar aportes y
                retiros ilimitados.
              </p>
            </div>
            {flipBoxes.map((box, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <FlipBox {...box} handleClick={scrollDown} key={index}>
                {box.message}
              </FlipBox>
            ))}
          </div>
        </div>
      );
    case 'carousels':
      return (
        <div {...style}>
          <div className="container">
            <div className="slide">
              <h3>Slide 2.1</h3>
            </div>
            <div className="slide">
              <h3>Slide 2.2</h3>
            </div>
            <div className="slide">
              <h3>Slide 2.3</h3>
            </div>
          </div>
        </div>
      );
    case 'carousel':
      return (
        <div {...style}>
          <div className="container">
            <Slides>
              <div>
                <h3>
                  Para hacer una Transferencia Total, podrás depositar todo tu
                  fondo disponible en Fondos Profuturo, en una entidad bancaria
                  o en ambos según el porcentaje que tu decidas.
                </h3>
              </div>
              <div>
                <img style={{ width: '100%' }} src={image1} alt="logo" />
              </div>
              <div>
                <button onClick={scrollUp}> CLICK </button>
              </div>
            </Slides>
          </div>
        </div>
      );
    default:
      return <div>VOID</div>;
  }
};

// export const HeroSection = props => {
//   const { scrollDown } = props;
//   return (
//     <section {...st[0]}>
//       HERO
//       <button onClick={scrollDown}>item</button>
//     </section>
//   );
// };

// export const AboutSection = () => <section {...st[1]}>TEAM</section>;
// export const TeamSection = () => <section {...st[2]}>TEAM</section>;
// export const ServicesSection = () => <section {...st[3]}>SERVICES</section>;
// export const ContactSection = () => <section {...st[4]}>CONTACT</section>;

// FOOTER SECTION
export const Footer = props => {
  const { isFooterOpen } = props;

  return (
    <FooterWrapper isFooterOpen={isFooterOpen}>
      <Top>
        <UpArrow />
      </Top>
      <Paragraph>Ⓒcopyright</Paragraph>
    </FooterWrapper>
  );
};

/**
 * Footer styles
 */
const FooterWrapper = styled.footer`
  background-color: #070707;
  width: 100vw;
  height: 65vh;
  position: absolute;
  top: 100%;
  transition: all 500ms;
  transform: translateY(0%);

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 1080px;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    z-index: 5;
    transition: opacity 300ms 300ms;
  }

  ${props =>
    props.isFooterOpen &&
    css`
      transition: all 500ms;
      transform: translateY(-100%);

      &::before {
        top: -1080px;
        display: block;
        opacity: 1;
      }
    `};
`;

const UpArrow = () => (
  <svg
    id="Layer_1"
    version="1.0"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    width="100%"
    height="50px"
    style={{ cursor: 'pointer' }}
  >
    <polyline
      fill="none"
      points="3,15.5 12,6.5 21,15.5 "
      stroke="#fff"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
  </svg>
);

const Top = styled.div`
  background-color: #0abde3;
  text-align: center;
`;

const Paragraph = styled.p`
  color: #fff;
  text-align: center;
`;
