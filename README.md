# 구름기사단: 인스타그램 클론코딩
☁ 구름(goorm) 풀스택 개발자 성장 과정 2차 스터디 **5조 구름기사단**의 구름PBL 과제: **[인스타그램](https://www.instagram.com/) 클론코딩**입니다.

<br>

> **구름PBL이란?** 전통적인 수동적 수업 방식을 벗이나 학습자가 학습의 주체가 되어 능동적인 학습 활동을 할 수 있도록 설계된 수업을 말하는 것으로 기존의 Problem Based Learning에 Project Based Learning, (Sequential) Progress Based Learning의 의미를 포함하고 있습니다.

<br>

## 📌 프로젝트 개요

- **과제 주제:** [인스타그램](https://www.instagram.com/) 클론코딩
- **과제 기간:** 2023.07.31 ~ 2023.08.13(총 14일)
  + **개발 기간:** 2023.08.07 ~ 2023.08.11(총 5일)
- **과제 목표** 
  + GitHub를 사용하여 팀 프로젝트 하는 법 익히기
  + 기간 내에 완성하는 연습하기

<br>

## 😎 조원 소개

<table>
  <tr>
    <th colspan="2" align="center">프로필</th>
    <th align="center">역할</th>
    <th align="center">작업 영역</th>
  </tr>
  <tr>
    <td align="center"><img src="https://avatars.githubusercontent.com/u/121299334?v=4" width="70"></td>
    <td width="200">문소희(<a href="https://github.com/soheetech" target="_blank">@soheetech</a>)<br>Back-End 구현</td>
    <td width="60" align="center">조장</td>
    <td>DB 연결 및 초기 환경 세팅, 댓글 작성/조회/삭제, 파일 병합</td>
  </tr>
  <tr>
    <td align="center"><img src="https://avatars.githubusercontent.com/u/58635833?v=4" width="70"></td>
    <td>박지국(<a href="https://github.com/parkjikuk" target="_blank">@parkjikuk</a>)<br>Front-End 구현</td>
    <td align="center">조원</td>
    <td>Index(홈+추천피드) 페이지, 개인 피드 페이지 구현</td>
  </tr>
  <tr>
    <td align="center"><img src="https://avatars.githubusercontent.com/u/62269067?v=4" width="70"></td>
    <td>이동규(<a href="https://github.com/LEE-Donggyu" target="_blank">@LEE-Donggyu</a>)<br>Back-End 구현</td>
    <td align="center">조원</td>
    <td>개인 피드 게시글 생성, 조회, 삭제 구현</td>
  </tr>
  <tr>
    <td align="center"><img src="https://avatars.githubusercontent.com/u/50459192?v=4" width="70"></td>
    <td>전민종(<a href="https://github.com/yss1902" target="_blank">@yss1902</a>)<br>Back-End 구현</td>
    <td align="center">조원</td>
    <td>회원가입, 회원 정보수정, 회원탈퇴, 로그인 기능 구현</td>
  </tr>
  <tr>
    <td align="center"><img src="https://avatars.githubusercontent.com/u/54804220?v=4" width="70"></td>
    <td>한세라(<a href="https://github.com/hansera" target="_blank">@hansera</a>)<br>Front-End 구현</td>
    <td align="center">조원</td>
    <td>회원가입, 회원 정보수정, 로그인 페이지 구현</td>
  </tr>
</table>

<br>

## 🔍 서비스 분석
![serviceflow](https://github.com/goorm-fullstack/knightsInstagram/assets/121299334/a2d66927-a716-4596-9b37-fff8bba0d031)

<br>

## 💻 사용한 기술

### Front-End
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

### Back-End
<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white">

### DB
<img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black">

### Communication
<img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white">

<br>

## 📁 Repository 구조

```
INSTAGRAM
├─.gradle
├─bin
├─build
├─frontend
│  ├─public
│  └─src
│      └─components
│          ├─Home
│          ├─Nav
│          ├─Pages
│          ├─Personal
│          └─Sign
├─gradle
└─src
    ├─main
    │  ├─java
    │  │  └─goorm
    │  │      └─instagram
    │  │          ├─config
    │  │          ├─controller
    │  │          ├─domain
    │  │          ├─repository
    │  │          └─service
    │  └─resources
    └─test
```

<br>

## 📚 회고록

- 좋았어요(Keep)
  + `문소희`: Git을 사용한 팀 프로젝트 과정 전반을 경험할 수 있었고 환경세팅&파일병합 때 생길 수 있는 문제 상황을 겪어볼 수 있어 좋았다.
  + `박지국`: 마크업이나 CSS 실력이 굉장히 부족했었는데 조금이나마 레이아웃 잡는법을 배울 수 있어서 좋았습니다
  + `이동규`: Spring을 사용한 경험이 좋았습니다.
  + `전민종`: 기본적인 CRUD 기능을 Firebase라는 클라우드 DB를 연동하여 제작해보았다. 또한 팀원과의 협업을 통한 프로젝트를 진행한 점이 좋았다.
  + `한세라`: 프로젝트 협업 방법에 대해서 알 수 있었고 리액트 사용법에 대해서 조금 더 이해할 수 있었습니다.
- 발생문제(Problem)
  + `문소희`: 리액트 공부가 선행되지 않은 상태에서 파일 병합을 진행해서 속도가 더뎌 시간 내 끝까지 마무리하지 못한 점이 아쉽다.
  + `박지국`: 디테일이 부족해서 완벽하게 따라하진 못했습니다
  + `이동규`: Spring이 익숙하지 않아서 모든 기능을 수행하진 못 했습니다.
  + `전민종`: Firebase에 익숙하지 않아서 실제 백앤드 코드와 연동을 하는 과정에서 많은 문제가 있었다. 또한, update 기능에서 create와의 index 매칭 문제도 있었다.
  + `한세라`: 1) 리액트 사용법, 2) 작업 시간에 대한 이해
- 해결방법(Try)
  + `문소희`: 리액트에서 발생한 문제는 기존 지식(html, css, js)과 error 메시지를 참고하여 해결했다. 발생했던 문제들은 기록해두어 같은 문제가 발생했을 때 빠르게 대응할 수 있도록 했다.
  + `박지국`: 최대한 인스타그램 홈페이지 개발자 도구로 보면서 따라해보려고 노력했습니다.
  + `이동규`: 중요한 기능을 선별하고 이 기능을 완성하는데 중점을 두었으며 완료했습니다.
  + `전민종`: 구글링과 공식문서를 통해 연결 방법을 더 자세히 알아보았다. 코드를 천천히 분석하여 CRUD의 기준점이 될 index를 통합하였다.
  + `한세라`: 1) 리액트: 강의 참고, GPT 활용, 개발자모드 활용, 2) 우선순위 정해서 해결하기: 조원들과 논의하기