// /* eslint-disable react/prop-types */
// import React from 'react';
// // import { isAuthenticated } from './auth';

// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import { useAuth } from './contexts/auth';

// export default function Routes2() {
//   const { signed, loading } = useAuth();

//   // const PrivateRoute = ({ component: Component, ...rest }) => (
//   //   <Route
//   //     {...rest}
//   //     render={(props) =>
//   //       signed ? (
//   //         <Component {...props} />
//   //       ) : (
//   //         <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//   //       )
//   //     }
//   //   />
//   // );

//   if (loading) {
//     return (
//       <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         {/* <ActivityIndicator size='large' color='#999' /> */}
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path='/' component={() => <h1>Hello World</h1>} />
//         {/* <PrivateRoute path='/app' component={() => <h1>Você está logado</h1>} /> */}
//       </Switch>
//     </BrowserRouter>
//   );
// }
