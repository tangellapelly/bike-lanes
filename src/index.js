import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
   <Router>
      <React.StrictMode>
         <Switch>
            <Route path="/:city" component={App} />
            <Route path="/" component={App} />
         </Switch>
      </React.StrictMode>
   </Router>,
   document.getElementById('root')
);
