import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Profile from "../routes/Profile";
import Home from "../routes/Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AppRouter = ({ isLoggedIn, userObj }) => {
 
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {} else {
    }
  });
   const uid = auth.lastNotifiedUid;



  

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact path="/" element={<Profile userObj={userObj} />} />
          </>
        ) : (
          <Route exact path="" element={<Home />} />
        )}
      
      </Routes>
    </Router>
  );
}

export default AppRouter;