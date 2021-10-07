import {BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Project from './Project';

function Routes() {
  return (
    <div className= 'page-container'>
    <div className = 'content-wrap'>
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component = {Header}/> 
        <Route path='/Project/:id' component={Project} /> 
      </Switch>
    </BrowserRouter> 
    </div>
   <Footer /> 
    </div>
  );
}

export default  withRouter(Routes);
