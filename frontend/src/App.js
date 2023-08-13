import { Home } from './components/Pages/Home';
import { PersonalPage } from './components/Pages/PersonalPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from './components/Nav/Nav';
import styles from './App.module.css';
import Authenticate from './components/Sign/Authenticate';
import Profile from './components/Sign/Profile';
import SignUp from "./components/Sign/Signup";
import Delete from "./components/Sign/Delete";
import {useState} from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/home" element={<Home />}/>
          <Route path='/signin' element={<Authenticate />} />  // 'element' prop을 사용
          <Route path='/profile/:email' element={<Profile />} />  // 'element' prop을 사용
          <Route path="/delete" element={<Delete />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
