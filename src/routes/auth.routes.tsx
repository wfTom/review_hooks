import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';

export const AuthRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={SignIn} />
    </Switch>
  );
};
