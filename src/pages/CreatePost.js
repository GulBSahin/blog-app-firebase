
import BlogForm from "../components/BlogForm";

function CreatePost({ isAuth }) {
  

  return (
    <div >
        <BlogForm isAuth={isAuth}/>
    </div>
  );
}

export default CreatePost;


