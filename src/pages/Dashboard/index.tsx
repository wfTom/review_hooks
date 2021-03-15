import React from 'react';
import { useAuth } from '../../contexts/auth';

import { Container } from './style';

export const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  async function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      {user?.name}
      <button title='Sign Out' onClick={handleSignOut} />
    </Container>
  );
};
