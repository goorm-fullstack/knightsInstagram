import React, {useState} from 'react';
import "./Login.css";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Login() {

  const backgroundImageUrl = "https://static.cdninstagram.com/rsrc.php/v3/yS/r/ajlEU-wEDyo.png";

    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/login", credentials);
            if (response.data) {
                console.log("User logged in:", response.data);
                navigate('/home');
            } else {
                console.error("Login failed!");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

  return (
    <div className="login_form">
     <div className="_ab1y">
      <div className="login">

     {/*인스타그램 로고*/}
      <div className="img">
        <i
          data-visualcompletion="css-img"
          aria-label="Instagram"
          className=""
          role="img"
          style={{
           backgroundImage: `url(${backgroundImageUrl})`,
           backgroundPosition: "0px -52px",
           backgroundSize: "auto",
           width: "175px",
           height: "51px",
           backgroundRepeat: "no-repeat",
           display: "inline-block"
            }}
          > </i>
      </div>

     {/*아이디, 비밀번호 입력*/}
      <div className="_ab3a">
        <form className="form" id="loginForm" method="post" onSubmit={handleSubmit}>
          <div className="input_form">
            <div className="_ab32">
             <div className="id">
              <label calss="_aa48">
               {/*<span className='_aa4a'>전화번호, 사용자 이름 또는 이메일</span>*/}
               <input
               aria-label="전화번호, 사용자 이름 또는 이메일"
               aria-required="true"
               autoCapitalize="none"
               autoCorrect="off"
               maxLength="75"
               className="id_form"
               dir=""
               type="email"
               value={credentials.email}
               name="email"
               placeholder='전화번호, 사용자 이름 또는 이메일'
               onChange={handleChange}
             />
            </label>
             </div>
            </div>
            <div className="_ab32">
             <div className="id">
              <label calss="_aa48">
               {/*<span className='_aa4a'>비밀번호</span>*/}
               <input
                aria-label="비밀번호"
                aria-required="true"
                autoCapitalize="none"
                autoCorrect="off"
                className="id_form"
                type="password"
                value={credentials.password}
                name="password"
                placeholder='비밀번호'
                onChange={handleChange}
              />
            </label>
             </div>
            </div>
             {/*로그인 버튼*/}
            <div class="login_btn">
             <button class="btn" disabled="" type="submit"><span className="btn_1">로그인</span></button>
            </div>
            {/*중간선*/}
            <div class="_ab39">
               <div class="line_1">
                <div class="line_2"></div>
                  <div class="line_3">또는</div>
                <div class="line_2"></div>
                </div>
            </div>
            <div class="facebook">
              <button class="facebook_btn" type="button">
                <span class="facebook_span"></span>
                <span class="_ab37">Facebook으로 로그인</span>
              </button>
            </div>
       </div>
       <a className="forget_password"
          href="" 
          role="link" 
          tabIndex="0">비밀번호를 잊으셨나요?</a>
      </form>
      </div>
     </div>
    </div>
   </div>
  );
}

export default Login
