import React, {useState} from "react";
import "./Authenticate.css";
import Login from "./Login";
import Signup from './Signup';

function Authenticate() { 
    const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
    };

  return ( 
  <div className="authenticate">
  
    <div className="auth__right">
      {active === "login" ? <Login /> : <Signup /> }

      <div className="auth__more">
      <span>
      {active === "login" ? (
        <>
          계정이 없으신가요?{" "}
          <button onClick={handleChange}>가입하기</button>
        </>
      ) : (
        <>
          계정이 있으신가요? <button onClick={handleChange}>로그인</button>
        </>
      )}
    </span>
      </div>
     </div>

     <div className="Download">
     <div className="app_download">
       <span>앱을 다운로드하세요.</span>
     </div>  
     <div className="app_icons">
         <div className="Google">
             <img alt="Google Play에서 다운로드" className="_aa5q" src="https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png"></img>
         </div>
         <div className="Microsoft">
             <img alt="Microsoft에서 다운로드" className="_aa5q" src="https://static.cdninstagram.com/rsrc.php/v3/yw/r/LBxTdceDfgS.png"></img>
         </div>
     </div>
    </div>
   </div>
  );
 }
 
export default Authenticate
