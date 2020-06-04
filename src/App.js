import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Homepage from './containers/Homepage';
import { Pagenotfound } from './components/Pagenotfound';
import { Aboutpage } from './containers/Aboutpage';
import { Contactpage } from './containers/Contactpage';

function App() {
  return (
    <div >
     <Router>
     <Switch>
      <Route exact path ='/' component={Homepage}/>
      <Route path='/about' component={Aboutpage}/>
      <Route path='/contact' component={Contactpage}/>
      <Route exact path='*' component={Pagenotfound}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
