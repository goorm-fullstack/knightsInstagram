import { Home } from './components/Pages/Home';
import { PersonalPage } from './components/Pages/PersonalPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from './components/nav/Nav';
import styles from './App.module.css';
import './App.css';
import Authenticate from './components/Authenticate';
import Profile from './components/Profile';

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
          <Route path='/' element={<Authenticate />} />  // 'element' prop을 사용
          <Route path='/profile' element={<Profile />} />  // 'element' prop을 사용
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
