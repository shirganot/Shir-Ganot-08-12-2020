import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import ComposeEmail from './pages/ComposeEmail';
import ManageEmails from './pages/ManageEmails';

function App() {
  // const history = useHistory();

  // const background = location.state && location.state.background;

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/manage-emails/compose" />} />
        <Route path="/manage-emails/" component={ManageEmails} />
      </Switch>
      <switch>
        <Route path="/manage-emails/compose" component={ComposeEmail} />
      </switch>
    </Router>
  );
}

export default App;
