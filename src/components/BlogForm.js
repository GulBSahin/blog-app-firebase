import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const BlogForm = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [postDate, setPostDate] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postLabels, setPostLabels] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      postDate,
      postImage,
      postLabels,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div class="container-fluid">
        <main class="tm-main">
    <div className="col-lg-8 tm-post-col">
      
{/* blog */}
    <div className="tm-post-full">
        
        <hr className="tm-hr-primary tm-mb-45" />
        
        
        <div action className="mb-5 tm-comment-form">
          <h2 className="tm-color-primary tm-post-title mb-4">Create New Post</h2>
          <div className="mb-4">
            <input className="form-control"  type="text" placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}/>
          </div>
          <div className="mb-4">
            <input className="form-control"  type="text" placeholder="Date..."
            onChange={(event) => {
              setPostDate(event.target.value);
            }} />
          </div>
          <div className="mb-4">
            <input className="form-control"  type="text" placeholder="Image URL..."
            onChange={(event) => {
              setPostImage(event.target.value);
            }} />
          </div>
          <div className="mb-4">
            <input className="form-control"  type="text" placeholder="Labels..."
            onChange={(event) => {
              setPostLabels(event.target.value);
            }} />
          </div>
          <div className="mb-4">
            <textarea className="form-control" rows={6} defaultValue={""} placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}/>
          </div>
          <div className="text-right">
            <button className="tm-btn tm-btn-primary tm-btn-small" onClick={createPost}> Submit Post</button>                      
          </div>                                
        </div>                          
      </div>      
    </div>
    </main>
    </div>
  );
}

export default BlogForm;
