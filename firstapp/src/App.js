import logo from './logo.svg';
import './App.css';
import Car from './Car';

function App() {
  const html = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Car/>
        <Car/>
      </header>
    </div>
  );
  return html;
}

export default App;
