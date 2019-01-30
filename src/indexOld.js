import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import './index.scss';
import * as serviceWorker from './serviceWorker';

const fullpageOptions = {
  anchors: ["firstPage", "secondPage"],
  sectionsColor: ["#282c34", "#ff5f45"],
  callbacks: ["onLeave", "afterLoad"],
  scrollOverflow: true
};

const initialState = {
    show: true
}

const names = ['Jake', 'Jon', 'Tim' ];

const handleClicked = () => {
    
}

const FullpageWrapper = props => (
  <ReactFullpage
    {...props}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state); // eslint-disable-line no-console

      if (state.callback === "onLeave") {
        if (state.direction === "down") {
          console.log("going down..." + state.origin.index);
        }
      }
      
      return (
        <div id="fullpage-wrapper">
          <div className="section card__wrapper">
            {
                names.map( (item, index ) => {
                    return (
                        <button className="card-button" key={index} onClick={() =>{ fullpageApi.moveSectionDown(); console.log('asdasd', index)}}>
                        {item}
                        </button>
                    );
                } )
            }
          </div>
          {initialState && initialState.show && (
          <div className="section">
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
          )}
          
        </div>
      );
    }}
  />
);

ReactDOM.render(
  <FullpageWrapper {...fullpageOptions} {...names} {...initialState}/>,
  document.getElementById("root")
);

export default FullpageWrapper;



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
