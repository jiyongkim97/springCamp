import React, { useEffect, useState } from "react";
import { dbService } from "../fbase";
import { addDoc, collection, getDocs } from "firebase/firestore";

const PostWrite = (userObj) => {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [write, setWrite] = useState("");
  const [writes, setWrites] = useState([]);
  const getPosts = async () => {
    const dbPosts = await getDocs(collection(dbService, "1TfuPn77POUIqa5HraDPvB1pfz33"));
    dbPosts.forEach((doc) => {
      const postObject = {
        ...doc.data(),
        id: doc.id,
      };
      const writeObject = {
        ...doc.data(),
        id: doc.id,
      };
      setPosts((prev) => [postObject, ...prev]);
      setWrites((prev) => [writeObject, ...prev])
    });
  };
  useEffect(() => {
    getPosts();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(dbService, "1TfuPn77POUIqa5HraDPvB1pfz33"), {
        post,
        write,
      });
    } catch (error) {
    }
    setPost("");
    setWrite("");
  };

  const onChange = (event) => {
    const { target: { value }, } = event;
    setPost(value);
  }
  const onChanged = (event) => {
    const { target: { value, } } = event;
    setWrite(value);

  }

  return (
    <>
      <div className="postWrite_main">

        <form onSubmit={onSubmit}>
          <div className="postWrite">
            <span>보낼 내용</span>
            <input
              className="postWrite_detail"
              value={post}
              onChange={onChange}
              type="text"
            />
          </div>
          <div>
            <span>from</span>
            <input
              className="postFrom"
              value={write}
              onChange={onChanged}
            />
          </div>
          <button onChange={onChanged} className="postSend">편지보내기</button>
        </form>
      </div>
    </>
  );
};

export default PostWrite;