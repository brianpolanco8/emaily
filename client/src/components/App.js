import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

const Header = () => <h2>Header</h2>;
const Dashboard= () => <h2>Dashboard</h2>;
const SurveryNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2><a href='auth/google'>Login</a>Landing</h2>;

export default class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path={'/'} exact component={Landing}/>
            <Route path={'/surveys'} exact component={Dashboard}/>
            <Route path={'/surveys/new'} component={SurveryNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }

}