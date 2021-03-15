interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'uysdbuixnvjcp92dhej',
        user: {
          name: 'Tom',
          email: 'wf_tom@hotmail.com.br',
        },
      });
    }, 2000);
  });
}
