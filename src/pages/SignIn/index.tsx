import React from 'react';
import { useAuth } from '../../contexts/auth';

import { Container } from './style';

export const SignIn: React.FC = () => {
  const { signed, signIn } = useAuth();
  console.log(signed);

  async function handleSignIn() {
    const response = await signIn();
    console.log(response);
  }

  return (
    <Container>
      <button title='Sign In' onClick={handleSignIn} />
    </Container>
  );
};
