import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function BlogCard({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  },[]);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
 

  return (
    
    <div className="row tm-row">
      {postLists.map((post) => {
        return (
            
             <article className="col-12 col-md-6 tm-post">
                <hr className="tm-hr-primary" />
                <a href="post.html" className="effect-lily tm-post-link tm-pt-60">
                <div className="tm-post-link-inner">
                    <img src={post.postImage} alt="blog" className="img-fluid" /> 
                                             
                </div>
                
                {isAuth && post.author.id === auth.currentUser?.uid && (
                  <span className="position-absolute tm-new-badge">
                  <div
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </div>
                  </span>
                )}
                
                <h2 className="tm-pt-30 tm-color-primary tm-post-title"> {post.title}</h2>
                </a>                    
                <p className="tm-pt-30">
                {post.postText}
                </p>
                <div className="d-flex justify-content-between tm-pt-45">
                    <span className="tm-color-primary"> {post.postLabels}</span>
                    <span className="tm-color-primary">{post.postDate}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                    <span> {"  "} &#10084;
                    </span>
                    <span>by {post.author.name}</span>
                </div>
            </article>   

        );
      })}
    </div>
  );
}

export default BlogCard
