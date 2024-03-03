import logo from './logo.svg';
import './App.css';
import { Counter2 } from './components/hooks/useReducer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter2 />
      </header>
    </div>
  );
}

export default App;

// state vs props https://prezi.com/view/jsxp9TBfObFbVmbggoLr/
