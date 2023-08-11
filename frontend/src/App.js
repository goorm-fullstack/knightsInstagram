import { Home } from './components/pages/Home';
import { PersonalPage } from './components/pages/PersonalPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from './components/nav/Nav';
import styles from './App.module.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/update/:email" element={<Update />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
