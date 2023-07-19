import './App.css';
// import { Memoed } from './components/hooks/useMemo';
import FetchError from './components/hw2/FetchError';
import FetchUsers from './components/hw2/FetchUsers';
import UseEffectFetch from './components/hw2/UseEffectFetch';

function App() {
  return (
    <div className="App">
        {/* <Memoed /> */}
        <FetchError />
        <FetchUsers />
        <UseEffectFetch />
    </div>
  );
}

export default App;
