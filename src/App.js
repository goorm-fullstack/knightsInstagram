import './App.css';
import Authenticate from './components/Authenticate';
import Profile from './components/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // 'Routes'를 import

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Authenticate />} />  // 'element' prop을 사용
          <Route path='/profile' element={<Profile />} />  // 'element' prop을 사용
        </Routes>
      </Router>
    </>  
  );
}

export default App;