import Auth from './components/Auth';
import Header from './components/Header';
import Counter from './components/Counter';
import { useSelector } from 'react-redux';

function App() {

  const authStatus = useSelector((state) => state.auth.authStatus);
  console.log('authStatus', authStatus)
  return (
    <>
      <Header />
      <Auth />
      <Counter />
    </>
  );
}

export default App;
