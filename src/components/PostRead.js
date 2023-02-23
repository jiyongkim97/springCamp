import React, { useEffect, useState } from "react";
import { dbService } from "../fbase";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const PostRead = (userObj) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) { } else {
    }
  });
  const uid = auth.lastNotifiedUid;
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const dbPosts = await getDocs(collection(dbService, `${uid}`));
    dbPosts.forEach((doc) => {
      const postObject = {
        ...doc.data(),
        id: doc.id,
      };
      setPosts((prev) => [postObject, ...prev]);
    });
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {posts.map((post, userObj) => (
        <div key={post.id}>
          <div className="mainPost"><h2>{post.post}</h2> <h4>{post.write}</h4></div>
        </div>))}

    </>
  );
}


export default PostRead;