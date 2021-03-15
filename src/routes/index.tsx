import React from 'react';
import { useAuth } from '../contexts/auth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <div
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* <ActivityIndicator size='large' color='#999' /> */}
        Loading...
      </div>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
