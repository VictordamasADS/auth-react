import React from 'react';
import { UserAuthContextProvider } from './context/context';
import { AppRoutes } from './routes/routes';

function App()  {
  return (
    <UserAuthContextProvider>
      <AppRoutes />
    </UserAuthContextProvider>
  )
}

export default App;