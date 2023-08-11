import React from 'react'
import "./Signup.css"

function Signup() {

  const backgroundImageUrl = "https://static.cdninstagram.com/rsrc.php/v3/yS/r/ajlEU-wEDyo.png";

  return (
    <div className="signup">
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
     <div class="signup_container">
       <form class="signup_form" method="post">
        <h2 class="signup_1">친구들의 사진과 동영상을 보려면 가입하세요.</h2>
         <div class="facebook_login">
         <button class="facebook_btn2" type="button">
          <span class="facebook_span2"></span> 
          Facebook으로 로그인
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
        {/*입력 폼*/}
        <div className="_ab32">
        <div className="id">
         <label calss="_aa48">
          {/*<span className='_aa4a'>전화번호, 사용자 이름 또는 이메일</span>*/}
          <input
          aria-label="휴대폰 번호 또는 이메일 주소"
          aria-required="true"
          autoCapitalize="none"
          autoCorrect="off"
          maxLength="75"
          className="id_form"
          dir=""
          type="email"
         //  value=""
          name="signup_id"
          placeholder='휴대폰 번호 또는 이메일 주소'
        />
       </label>
        </div>
       </div>
       <div className="_ab32">
             <div className="id">
              <label calss="_aa48">
               {/*<span className='_aa4a'>전화번호, 사용자 이름 또는 이메일</span>*/}
               <input
               aria-label="성명"
               aria-required="true"
               autoCapitalize="none"
               autoCorrect="off"
               maxLength="75"
               className="id_form"
               dir=""
               type="email"
              //  value=""
               name="name"
               placeholder='성명'
             />
            </label>
             </div>
            </div>
       <div className="_ab32">
            <div className="id">
             <label calss="_aa48">
              {/*<span className='_aa4a'>전화번호, 사용자 이름 또는 이메일</span>*/}
              <input
              aria-label="사용자 이름"
              aria-required="true"
              autoCapitalize="none"
              autoCorrect="off"
              maxLength="75"
              className="id_form"
              dir=""
              type="email"
             //  value=""
              name="username"
              placeholder='사용자 이름'
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
        <p className="_aail">
         <span className="guide">
         저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. 
         </span>
        </p>  
         {/*가입 버튼*/}
         <div class="login_btn">
         <button class="btn" disabled="" type="submit">
         <div class="btn_1">가입</div>
          </button>
        </div>  
       </form>
     </div>
    </div>
   </div>
  </div>
  );
}

export default Signup
