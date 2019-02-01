import React, { Component } from 'react';
import FullPageWrapper from './fullpage/FullpageWrapper';
import fullpageOptions from './fullpage/fullpageConfig';
import './sass/styles.scss';
class App extends Component {
  render() {
    return <FullPageWrapper {...fullpageOptions} />;
  }
}

export default App;
