import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';
import * as auth from '../services/auth';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// eslint-disable-next-line react/prop-types
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      // const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      // const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
      // if (storagedToken && storagedUser) {
      //   api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      //   setUser(JSON.parse(storagedUser));
      //   setLoading(false);
      // }
    }

    // await new Promise((resolve) => setTimeout(2000));

    loadStorageData();
  });

  async function signIn() {
    const response = await auth.signIn();
    console.log(response);
    setUser(response.user);
    api.defaults.headers.Authorization = `Bearer ${response.token}`;
    //   await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    //   await AsyncStorage.setItem('@RNAuth:token', JSON.stringify(response.token));
  }

  async function signOut() {
    // AsyncStorage.clear().then(() => {
    setUser(null);
    // });
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
