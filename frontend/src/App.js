import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { useState } from 'react';
import CreatedAccount from './components/CreatedAccount';
import SignUp from './components/SignUp';

const queryClient = new QueryClient();

function App() {

  const [newAccount, setNewAccount] = useState(null);

  const onCreated = (account) => {
    setNewAccount(account);
  }

  return (

    <QueryClientProvider client={queryClient}>
      <div className="App">
        <SignUp onCreated={onCreated}/>
        <CreatedAccount hasChange={newAccount}/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
