/* eslint-disable react/no-array-index-key */
import React from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';
import sections from '../navigation/items';
import { Section } from '../Sections';

// const FullPageWrapper = fullpageProps => (
//   <ReactFullpage
//     {...fullpageProps}
//     render={({ state, fullpageApi }) => {
//       console.log('render prop change', state, fullpageApi);
//       return (
//         <div style={{ position: 'relative' }}>
// {sections.map((section, index) => (
//   <Section
//     section={section}
//     state={fullpageProps}
//     key={index}
//     scrollDown={() => fullpageApi.moveSectionDown()}
//     scrollUp={() => fullpageApi.moveSectionUp()}
//   />
// ))}
//         </div>
//       );
//     }}
//   />
// );

// export default FullPageWrapper;

// const SEL = 'custom-section';
// const SECTION_SEL = `.${SEL}`;

// const originalColors = ['#282c34', '#ff5f45', '#0798ec'];

// class FullPageWrapper extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sectionsColor: [...originalColors],
//       fullpages: [
//         {
//           text: 'section 1',
//         }
//       ],
//     };
//   }

//   onLeave(origin, destination, direction) {
//     console.log('onLeave', { origin, destination, direction });
//     // arguments are mapped in order of fullpage.js callback arguments do something
//     // with the event
//   }

//   handleChangeColors() {
//     console.log('COLOR');
//     const newColors =
//       this.state.sectionsColor[0] === 'yellow'
//         ? [...originalColors]
//         : ['yellow', 'blue', 'white'];
//     this.setState({
//       sectionsColor: newColors,
//     });
//   }

//   handleAddSection() {
//     this.setState(state => {
//       const { fullpages } = state;
//       const { length } = fullpages;
//       fullpages.push({
//         text: `section ${length + 1}`,
//       });
//       console.log('ADD');
//       return {
//         fullpages: [...fullpages],
//       };
//     });
//     this.handleChangeColors();
//   }

//   handleRemoveSection() {

//     this.setState(state => {
//       const { fullpages } = state;
//       const newPages = [...fullpages];
//       if(fullpages.length - 1 > 0) {
//         newPages.pop();console.log('REMOVED');
//       }
//       return { fullpages: newPages };
//     });

//     this.handleChangeColors();
//   }

//   render() {
//     const { fullpages } = this.state;

//     if (!fullpages.length) {
//       return null;
//     }

//     const Menu = () => (
//       <div
//         className="menu"
//         style={{
//           position: 'fixed',
//           top: 0,
//           zIndex: 100,
//         }}
//       >
//         <ul>
//           <li>
//             <button onClick={() => this.handleAddSection()}>+ Section</button>
//             <button onClick={() => this.handleRemoveSection()}>
//               - Section
//             </button>
//             <button onClick={() => this.handleChangeColors()}>
//               Change colors
//             </button>
//           </li>
//         </ul>
//       </div>
//     );

//     return (
//       <div >
//         <Menu />
//         <ReactFullpage
//          {...this.state}
//           licenseKey={this.state.licenceKey}
//           navigation
//           anchors={['firstPage', 'secondPage', 'thirdPage']}
//           sectionSelector={SECTION_SEL}
//           onLeave={this.onLeave.bind(this)}
//           sectionsColor={this.state.sectionsColor}
//           render={comp => (
//             <ReactFullpage.Wrapper>
//               {fullpages.map(({ text }) => (
//                 <div key={text} className={SEL}>
//                   <h1>{text}</h1>
//                 </div>
//               ))}
//             </ReactFullpage.Wrapper>
//           )}
//         />
//       </div>
//     );
//   }
// }

// export default FullPageWrapper;

const originalColors = ['#282c34', '#ff5f45', '#0798ec'];

class FullPageWrapper extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          type: 'flipbox'
        }
      ]
    };
  }

  onLeave(origin, destination, direction) {
    console.log('onLeave', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }
  afterLoad(origin, destination, direction) {
    console.log('afterLoad', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
    if (direction === 'up' && destination.isFirst) {
      console.log('ERES TUUUUUUU');
      this.handleRemoveSection();
    }
  }

  handleChangeColors() {
    console.log('COLOR');
    const newColors =
      this.state.sectionsColor[0] === 'yellow'
        ? [...originalColors]
        : ['yellow', 'blue', 'white'];
    this.setState({
      sectionsColor: newColors
    });
  }

  handleAddSection() {
    this.setState(state => {
      const { fullpages } = state;
      fullpages.push({
        type: 'carousel'
      });
      console.log('ADD');
      return {
        fullpages: [...fullpages]
      };
    });
  }

  handleRemoveSection() {
    this.setState(state => {
      const { fullpages } = state;
      const newPages = [...fullpages];
      if (fullpages.length - 1 > 0) {
        newPages.pop();
        console.log('REMOVED');
      }
      return { fullpages: newPages };
    });

    // this.handleChangeColors();
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    const Menu = () => (
      <div
        className="menu"
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 100
        }}
      >
        <ul>
          <li>
            <button onClick={() => this.handleAddSection()}>+ Section</button>
            <button onClick={() => this.handleRemoveSection()}>
              - Section
            </button>
            <button onClick={() => this.handleChangeColors()}>
              Change colors
            </button>
          </li>
        </ul>
      </div>
    );

    return (
      <div>
        <Menu />
        <ReactFullpage
          {...this.state}
          {...this.props}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          sectionsColor={this.state.sectionsColor}
          render={({ state, fullpageApi }) => (
            <div>
              {fullpages.map((section, index) => (
                <Section
                  section={section}
                  state={this.props}
                  key={index}
                  scrollDown={() => {
                    this.handleAddSection();
                    fullpageApi.moveSectionDown();
                  }}
                  scrollUp={() => fullpageApi.moveSectionUp()}
                />
              ))}
            </div>
          )}
        />
      </div>
    );
  }
}

export default FullPageWrapper;
