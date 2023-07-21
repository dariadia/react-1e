import logo from './logo.svg';
import './App.css';
// import { Memoed } from './components/hooks/useMemo';
import UseMemoHW from './components/hw3/UseMemoHW'
import UseRefHW from './components/hw3/UseRefHW';
import UseContextHW from './components/hw3/UseContextHW';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <UseMemoHW /> */}
      {/* <UseRefHW /> */}
      <UseContextHW />
      </header>
    </div>
  );
}

export default App;
