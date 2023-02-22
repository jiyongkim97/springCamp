import React, { useEffect, useState } from "react";
import AppRouter from "./components/Router";
import {authService} from "./fbase.js"




function App (){
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setUserObj(null);
      }  
      setInit(true)
    })
  }, [])

  return(
    <>
   { init ? <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} /> : "로딩중.."}
      <footer>&copy; {new Date().getFullYear()} FlowerPost</footer>
  </>
  )
}

export default App