<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
      </header>
    </div>
=======
import { Home } from './components/pages/Home';
import { PersonalPage } from './components/pages/PersonalPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from './components/Nav/Nav';
import styles from './App.module.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal" element={<PersonalPage />} />
        </Routes>
      </div>
    </BrowserRouter>
>>>>>>> frontend
  );
}

export default App;
