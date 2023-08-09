import React from 'react'
import "./Signup.css"

function Signup() {
  return <div className="signup">
  <img src="/img/signup_logo.png" alt="" />
    <input type="email" placeholder='휴대폰 번호 또는 이메일 주소' />
    <input type="text" placeholder='성명' />
    <input type="text" placeholder='사용자 이름' />
    <input type="password" placeholder='비밀번호' />
    <span>저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다.  
    </span>
    <button>가입</button>
  </div>;
  
}

export default Signup
