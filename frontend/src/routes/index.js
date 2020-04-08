import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Profile, SignIn, SignUp, Dashboard } from '../pages/';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
