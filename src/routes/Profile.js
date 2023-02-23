import React, { useState } from "react";
import Swal from "sweetalert2";
import PostRead from "../components/PostRead";
import { authService } from "../fbase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Profile = (userObj) => {
  console.log(window.location)
  const onLogOutClick = () => authService.signOut();

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
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) { } else {
    }
  });
  const user = auth.currentUser;
  const [newDisplayName, setNewDisplayName] = useState(user.displayName)
  if (user !== null) {
    const displayName = user.displayName;
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
      <PostRead />
      <button onClick={onLogOutClick}>로그아웃</button>
    </>

  )
}

export default Profile;