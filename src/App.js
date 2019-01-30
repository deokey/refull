import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FullPageWrapper from './fullpage/FullpageWrapper';
import fullpageOptions from './fullpage/fullpageConfig';
import './sass/styles.scss';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <FullPageWrapper {...fullpageOptions} />
              )}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
