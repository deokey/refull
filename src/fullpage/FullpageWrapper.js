/* eslint-disable react/no-array-index-key */
import React from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';
import sections from '../navigation/items';
import { Section } from '../Sections';



const FullPageWrapper = fullpageProps => (
  <ReactFullpage
    {...fullpageProps}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);
      return (
        <div style={{ position: 'relative' }}>
          {sections.map((section, index) => (
            <Section
              section={section}
              state={fullpageProps}
              key={index}
              scrollDown={() => fullpageApi.moveSectionDown()}
              scrollUp={() => fullpageApi.moveSectionUp()}
            />
          ))}
        </div>
      );
    }}
  />
);


export default FullPageWrapper;
