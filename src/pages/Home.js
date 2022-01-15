
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


