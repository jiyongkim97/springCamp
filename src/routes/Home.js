import React, { useState } from "react";
import Swal from "sweetalert2";
import PostWrite from "../components/PostWrite";
import Auth from "./Auth";

const howto = function () {
  Swal.fire({
    title: " 편지를 받으면 나무 아래 벚꽃 잎이 쌓입니다. ",
    text: "email형식의 아이디와 6자리 이상의 비밀번호로 가입이 가능합니다. "
  })
}
const onCheckFlowerOpen = function () {
  return (
    Swal.fire({
      text: '설렘이 시작되는 날 :)',
      imageUrl: 'https://www.kkday.com/ko/blog/wp-content/uploads/230210_%E1%84%8B%E1%85%AF%E1%84%83%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6%E1%84%89%E1%85%B3_2023-%E1%84%87%E1%85%A5%E1%86%BD%E1%84%81%E1%85%A9%E1%86%BE-%E1%84%80%E1%85%A2%E1%84%92%E1%85%AA%E1%84%8C%E1%85%B5%E1%84%83%E1%85%A9.jpg',
      imageWidth: 400,
      imageHeight: 500,
      imageAlt: '개화시기',
    })

  )
}
const Home = (userObj) => {
  const [login, setLogin] = useState("");
  const onLoginBtn = () => {
    setLogin(true);
  }

  return (
    <>
      <div>
        <img src={require(`../img/sideTree.png`)} className="sideTree" />
        <div className="btn_open" ><button onClick={onCheckFlowerOpen} >벚꽃 개화 시기 보기</button></div>
        <div className="main_topic">봄꽃이 다 떨어지기 전 당신의 마음을 전하세요.</div>
        <div className="treeName">김지용의 나무</div>
      </div>
      <div></div>
      <div> <img src={require(`../img/tree.png`)} className="mainTree" /></div>
      <div>
        <span className="howto" onClick={howto}>사용법 보기</span>
      </div>
      <PostWrite />
      <button onClick={onLoginBtn}>로그인</button>
      <div>
        {
          login ? <Auth /> : null
        }
      </div>
    </>
  )
}
export default Home;