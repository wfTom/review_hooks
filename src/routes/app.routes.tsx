import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Profile } from '../pages/Profile';

export const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/dashboard' component={Dashboard} />
      <Route path='/profile' component={Profile} />
    </Switch>
  );
};
