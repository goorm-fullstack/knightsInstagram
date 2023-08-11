import React from 'react'
import "./Login.css"

function Login() {

  const backgroundImageUrl = "https://static.cdninstagram.com/rsrc.php/v3/yS/r/ajlEU-wEDyo.png";

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
        <form className="form" id="loginForm" method="post">
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
              //  value=""
               name="username"
               placeholder='전화번호, 사용자 이름 또는 이메일'
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
                // value=""
                name="password"
                placeholder='비밀번호'
              />
            </label>
             </div>
            </div>
             {/*로그인 버튼*/}
            <div class="login_btn">
             <button class="btn" disabled="" type="submit">
             <div class="btn_1">로그인</div>
              </button>
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
