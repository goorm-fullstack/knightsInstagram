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
    <div className="Download_container">
     <div className="Download">
     <span className="app_download" dir="auto" style={{ lineHeight: '18px'}}>앱을 다운로드하세요.</span>
    </div>
    <div className="download_img">
     <a className="img_1"
      aria-label="Google play에서 다운로드"
      href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D98D463FA-1E19-4FAC-931D-99C7F2183887%26utm_campaign%3DsignupPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge"
      role="link"
      target="_blank">
      <img alt="Google Play에서 다운로드" className="_aa5q" src="https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png"></img>
       </a>
       <a className="img_1"
      aria-label="Google play에서 다운로드"
      href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=1275%2C0%2C1290%2C1405"
      role="link"
      target="_blank">
      <img alt="Microsoft에서 다운로드" className="_aa5q" src="https://static.cdninstagram.com/rsrc.php/v3/yw/r/LBxTdceDfgS.png"></img>
       </a>
      </div>
    </div>
   </div>
  );
 }
 
export default Authenticate
