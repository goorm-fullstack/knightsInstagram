import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div className="login_form">

     <div className="login">
        <img src="/img/signup_logo.png" alt="" />
          <input type="email" placeholder='전화번호, 사용자 이름 또는 이메일' />
          <input type="password" placeholder='비밀번호' />
          <button>로그인</button>
      </div>

      <div className="facebook_login">
        <div>
          <span>----또는----</span>
        </div>
        <div>
          <a className="facebook_click" href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Dko_KR%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%252210qfeyc6yj60r1n7lk1uj5q35c1xtf7y41rp9kn819hivaw1br856x%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252Fhsr10135%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D78ccd7b2-5634-4970-98bc-5bcbf0e6645e%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%252210qfeyc6yj60r1n7lk1uj5q35c1xtf7y41rp9kn819hivaw1br856x%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252Fhsr10135%25252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0" role="link" tabindex="0">Facebook으로 로그인</a>
          </div>
     <div>
        <a className="forget_password" href="https://www.instagram.com/accounts/password/reset/?next=%2Fhsr10135%2F" role="link" tabindex="0">비밀번호를 잊으셨나요?</a>
     </div>
   </div>
   </div>
  );
}

export default Login
