import React , { useState} from 'react';
import { BrowserRouter as Router,  Link, NavLink } from "react-router-dom";
import img2 from "../assets/gblogo.png" 

const Navbar = ({ isAuth, signUserOut}) => {

  const [toggler, setToggler] = useState(false);

  const showToggler = () => { 
      setToggler ( !toggler);
      console.log(toggler);
      console.log(toggler ? "show navbar-toggler": "navbar-toggler ")
      };

    return (
        <header className={toggler ? "tm-header show": "tm-header "} id="tm-header">
        <div className="tm-header-wrapper">
            <button onClick={showToggler} className={toggler ? "navbar-toggler show ": "navbar-toggler "}  type="button" aria-label="Toggle navigation">
            {" "}
            &#9776; 
            </button>
            <div className="tm-site-header">
                <img src={img2} alt="" />          
            </div>
            
            <nav className="tm-nav" id="tm-nav">            
                <ul>

                    <NavLink to="/" className="tm-nav-item ">
                        <NavLink to="/" className="tm-nav-link"> Home </NavLink> 
                    </NavLink>
                    <NavLink to="/about" className="tm-nav-item">
                        <NavLink to="/about" className="tm-nav-link"> About </NavLink> 
                    </NavLink>
                    
                    {!isAuth ? (
                        <NavLink to="/login" className="tm-nav-item">
                            <NavLink to="/login" className="tm-nav-link"> Login </NavLink>
                        </NavLink>
                    ) : (
                    <>
                    <li className="tm-nav-item">
                    <NavLink to="/CreatePost" className="tm-nav-link"> Create Post </NavLink>
                    </li>
                    <li className="tm-nav-item">
                    <div onClick={signUserOut} className="tm-nav-link"> Log Out </div>
                    </li>
                   
            </>
            )}
                </ul>
                    {/* <li className="tm-nav-item active">
                        <NavLink to="/" className="tm-nav-link"> Home </NavLink> 
                    </li>
                    <li className="tm-nav-item">
                        <NavLink to="/about" className="tm-nav-link"> About </NavLink> 
                    </li>
                    
                    {!isAuth ? (
                        <li className="tm-nav-item">
                            <Link to="/login" className="tm-nav-link"> Login </Link>
                        </li>
                    ) : (
                    <>
                    <li className="tm-nav-item">
                    <NavLink to="/CreatePost" className="tm-nav-link"> Create Post </NavLink>
                    </li>
                    <li className="tm-nav-item">
                    <div onClick={signUserOut} className="tm-nav-link"> Log Out </div>
                    </li>
                   
            </>
            )}
                </ul> */}
            </nav>
            
        </div>
    </header>
    )
}

export default Navbar
