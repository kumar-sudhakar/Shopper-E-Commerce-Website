import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';  // <-- import Link
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {

    const [menu, setMenu] = useState("Shop");
    const { getTotalCartItems } = useContext(ShopContext);


    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("Shop") }}> <Link to='/' style={{textDecoration: 'none'}}  >Shop</Link> {menu === "Shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Mens") }}> <Link to='/mens' style={{textDecoration: 'none'}}  >Men</Link>  {menu === "Mens" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("Womens") }}> <Link to='/womens' style={{textDecoration: 'none'}}  >Women</Link>  {menu === "Womens" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("Kids") }}> <Link to='/kids' style={{textDecoration: 'none'}}  >Kid</Link>  {menu === "Kids" ? <hr /> : <></>} </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login' > <button>Login</button> </Link>
                <Link to='/cart'>               <img src={cart_icon} alt="" /> </Link>
                <div className="nav-cart-count">{ getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar