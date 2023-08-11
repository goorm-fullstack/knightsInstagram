import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import {useState} from "react";
import Home from "./routes/Home";
import Update from "./routes/Update";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/signup" element={<SignUp />}/>
              <Route path="/signin" element={<SignIn />}/>
              <Route path="/home" element={<Home />}/>
              <Route path="/update/:email" element={<Update />} />
          </Routes>
      </BrowserRouter>
  );

}

export default App;