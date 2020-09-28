import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { first } from './first';
import { Second } from './second';
import { Third } from './third';
import { Fourth } from './fourth';
import { Fifth } from './fifth';
import { skill_test } from './skill_test';
import { Simulation } from './Simulation';
import { NoMatch } from './NoMatch';
import { Layout } from './Components/Layout';
import { NavigationBar } from './Components/NavigationBar';
import { Jumbotron } from './Components/Jumbotron';
import { SubOptimalStatement } from "./subOptimalStatement";



class App extends Component {
  static navigationOptions = {
    headerTitleStyle: { alignSelf: 'center' },
    title: 'Center Title',
}
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
              <Route exact path="/" component={first} />
              <Route exact path="/first" component={first} />
              <Route exact path="/second" component={Second} />
              <Route exact path="/third" component={Third} />
              <Route exact path="/fourth" component={Fourth} />
              <Route exact path="/fifth" component={Fifth} />
              <Route path="/simulation" component={Simulation} />
              <Route path="/skill_test" component={skill_test} />
              <Route path="/sub-optimal-statement" component={SubOptimalStatement} />
              <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
