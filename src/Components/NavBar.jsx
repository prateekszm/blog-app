import { Button } from "@mui/material"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo"><NavLink className="navlist" tag={NavLink} to="/">Level</NavLink></div>

            <ul>
                <NavLink className="navlist" tag={NavLink} to="/user/home">Home</NavLink>
                <NavLink className="navlist" tag={NavLink} to="/about">About us</NavLink>
                <NavLink className="navlist" tag={NavLink} to="/">Post</NavLink>
                <NavLink className="navlist" tag={NavLink} to="/">Profile</NavLink>
                
            </ul>
            <div class="search">
                <input className="searchBox" type="text" placeholder="search" name="name" />
            </div>


            <NavLink className="navlist" tag={NavLink} to="/">Log off</NavLink>


        </nav>

    )
}
export default NavBar