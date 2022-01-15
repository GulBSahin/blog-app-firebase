
import React from 'react'
import BlogCard from '../components/BlogCard'

const Home = ({isAuth}) => {

  return (
    <div className="container-fluid">
       <main className="tm-main">
           <BlogCard isAuth={isAuth}/>
       </main>
    </div>
  )
}

export default Home





// import React, { useEffect, useState } from "react";
// import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
// import { auth, db } from "../firebase-config";

// function Home({ isAuth }) {
//   const [postLists, setPostList] = useState([]);
//   const postsCollectionRef = collection(db, "posts");

//   useEffect(() => {
//     const getPosts = async () => {
//       const data = await getDocs(postsCollectionRef);
//       setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };

//     getPosts();
//   });

//   const deletePost = async (id) => {
//     const postDoc = doc(db, "posts", id);
//     await deleteDoc(postDoc);
//   };
//   return (
//     <div className="homePage">
//       {postLists.map((post) => {
//         return (
//           <div className="post">
//             <div>
//              <article className="col-12 col-md-6 tm-post">
//                 <hr className="tm-hr-primary" />
//                 <a href="post.html" className="effect-lily tm-post-link tm-pt-60">
//                 <div className="tm-post-link-inner">
//                     <img src="..\assets\img-01.jpg" alt="Image" className="img-fluid" />                            
//                 </div>
//                 <span className="position-absolute tm-new-badge">
//                 {isAuth && post.author.id === auth.currentUser.uid && (
//                   <button
//                     onClick={() => {
//                       deletePost(post.id);
//                     }}
//                   >
//                     {" "}
//                     &#128465;
//                   </button>
//                 )}
//                 </span>
//                 <h2 className="tm-pt-30 tm-color-primary tm-post-title"> {post.title}</h2>
//                 </a>                    
//                 <p className="tm-pt-30">
//                 {post.postText}
//                 </p>
//                 <div className="d-flex justify-content-between tm-pt-45">
//                     <span className="tm-color-primary">Labels for Blog</span>
//                     <span className="tm-color-primary">Date of blog</span>
//                 </div>
//                 <hr />
//                 <div className="d-flex justify-content-between">
//                     <span>comments count</span>
//                     <span>{post.author.name}</span>
//                 </div>
//             </article>   
//         </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Home;
