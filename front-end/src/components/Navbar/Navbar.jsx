import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  const[menu,setMenu] = useState("menu");

  const {getTotalCartAmount,token,setToken} = useContext(StoreContext)

  const navigate = useNavigate();
  const logout =()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")


  }
   
  return (
    <div className='navbar'>
        <Link to="/" className="logo">
  <h2>D-Dish</h2>
</Link>
<ul className="navbar-menu">
  <li className={menu==="home" ? "active" : ""} onClick={()=>setMenu("home")}>
    <Link to="/">Home</Link>
  </li>
  <li className={menu==="menu" ? "active" : ""} onClick={()=>setMenu("menu")}>
    <a href="#explore-menu">Menu</a>
  </li>
  <li className={menu==="mobile-app" ? "active" : ""} onClick={()=>setMenu("mobile-app")}>
    <a href="#app-download">Mobile App</a>
  </li>
  <li className={menu==="contact-us" ? "active" : ""} onClick={()=>setMenu("contact-us")}>
    <a href="#footer">Contact us</a>
  </li>
</ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>
            :<div className='navbar-profile'>
              <img src={assets.profile_icon} alt=""/>
              <ul className="nav-profile-dropdown">
                <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt =""/><p>Orders</p></li>
                <hr/>
                <li onClick={logout}><img src={assets.logout_icon} alt =""/><p>Logout</p></li>
              </ul>
               
             </div> }
            
        </div>
       
    </div>
  )
}

export default Navbar