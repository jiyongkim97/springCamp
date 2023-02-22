import React, { useEffect, useState } from "react";
import { dbService } from "../fbase";
import { addDoc, collection, getDocs } from "firebase/firestore";



const PostWrite = ()=>{
  const [post,setPost] = useState("");
  const [posts, setPosts] = useState([]);


 const getPosts = async () => {
    const dbPosts = await getDocs(collection(dbService, "posts"));
    dbPosts.forEach((doc) => {
    const postObject = {
    ...doc.data(),
    id: doc.id,
    };
    console.log(doc.id, " => ", doc.data());
    setPosts((prev) => [postObject, ...prev]);
    });
    };
    
    useEffect(() => {
    getPosts();
    }, []);
 

  
 

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
    const docRef = await addDoc(collection(dbService, "posts"), {
    post,
    
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (error) {
    console.error("Error adding document: ", error);
    }
    setPost("");
    };

  


  const onChange = (event) => {
    const {target:{value},} = event;
    setPost(value);
  }

  
  return(
  <>
  <div>
    <form onSubmit={onSubmit}>
      <input
      value={post} 
      onChange={onChange}
      type="text"/>
     
      </form>
      </div>
      
      <div>
        {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.post}  {post.name}</h4>
        </div>))}
      </div>
      
  </>
  );
};

export default PostWrite;