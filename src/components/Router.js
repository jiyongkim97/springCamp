import React, { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Profile from "../routes/Profile";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      {/* {isLoggedIn && <Navigation userObj={userObj} />} */}
      <Routes>
        {/* {isLoggedIn ? (
          <>
            <Route path="/" element={<Home userObj={userObj} />} />
            <Route path="/profile" element={<Profile userObj={userObj} />} />
          </>
        ) : (
          <Route path="/" element={<Auth />} />
        )} */}
        <>
        <Route path="/" element={<Home userObj={userObj} />} />
        </>
      </Routes>
    </Router>
  );
}

export default AppRouter;