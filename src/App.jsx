import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ComposeEmail from './pages/ComposeEmail';
import ManageEmails from './pages/ManageEmails';
import MessageBody from './pages/MessageBody';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/manage-emails" />} />
        <Route path="/manage-emails" component={ManageEmails} />
      </Switch>
      {/* //Another switch to display popup windows, with ManageEmails in the background */}
      <Switch>
        <Route path="/manage-emails/compose" component={ComposeEmail} />
        <Route path="/manage-emails/email-body" component={MessageBody} />
      </Switch>
    </Router>
  );
}

export default App;
