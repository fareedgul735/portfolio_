acha is photo ko dekho same as jho mai batonga wese he create karkay dena using bootstrap mene bootstrap install ki hai lekin koi link lagaya nhi hai woh bhi dena sath this is layout code import { Link, Outlet } from "react-router"; const Layout = () => { return ( <div className="container"> <div className="left-bar"> <ul> <Link to={"/home"}> <li>Home</li> </Link> <Link to={"/about"}> <li>About Me</li> </Link> <Link to={"/resume"}> <li>Resume</li> </Link> <Link to={"/portfolio"}> <li>Portfolio</li> </Link> <Link to={"/blog"}> <li>Blog</li> </Link> <Link to={"/contact"}> <li>Contact</li> </Link> </ul> </div> <div className="user-info"> <div className="profile-img"></div> <div className="name">Alex Smith</div> <div className="role">Web Developer</div> <div className="social-links"></div> <div className="cv-btn"> <a href=""> <button>Download Cv</button> </a> </div> <div className="footer"> <p>© 2025 All rights reserved.</p> </div> </div> <div className="outlet-container"> <Outlet /> </div> <div className="random-page-btn"> <button>{">"}</button> <button>{"<"}</button> </div> </div> ); }; export default Layout; & listen dekho left bar fixed hoga or userinfo fixed rahega jho outlet hai woh agar scroller ki need hove agar content hoga tu scroller ajyega srf use component ,mai userinfo or left bar fixed he rahega left bar same jho photo mai color black use hoga bg mai or icons color white hoga or jis page active hoga woh light sky color hoga active functionality add karna simple info ka bg bhi same light gray hoga or outlet ka color black rahega or last mai jho dou arrow btns arhe hai uskay zariye say random pages arhe hongay mtlab pages yahi hongay home about etc btn alag alag arhe honga 
const Home = () => {
  return (
    <div className="parent">
      <div className="heading">
        <h1>Alex Smith</h1>
      </div>
      <div className="role">
        <span>web developer</span>
      </div>
    </div>
  );
};

export default Home;

import React from 'react'

const About = () => {
  return (
    <div>About</div>
  )
}

export default About
import React from 'react'

const Blog = () => {
  return (
    <div>Blog</div>
  )
}

export default Blog
import React from 'react'

const Portfolio = () => {
  return (
    <div>Portfolio</div>
  )
}

export default Portfolio