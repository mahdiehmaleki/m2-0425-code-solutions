import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../../../../../vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React JSX</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Total Button Clicks: {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        JSX is a syntax extension for JavaScript that allows us to write
        HTML-like code inside JavaScript. JSX makes it easier to describe UI
        structures in a more readable and declarative way.
      </p>
      <p className="read-the-docs">
        When a component returns JSX, React interprets it as a structure of
        elements and efficiently maps it to real DOM nodes during rendering.
      </p>
    </>
  );
}

export default App;
