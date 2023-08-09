import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import {useState} from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/signup" element={<SignUp />}/>
              <Route path="/signin" element={<SignIn />}/>
          </Routes>
      </BrowserRouter>
  );

}

export default App;