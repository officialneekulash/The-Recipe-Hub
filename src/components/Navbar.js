import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import axios from "axios";
import Logout from "../pages/Logout";

import { useState } from "react"
import Sidebar from "./Sidebar"

import {faHome, faList, faCog, faUtensils } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icon } from "@fortawesome/fontawesome-svg-core";


export default function Navbar(){

    const [info, setInfo] = useState("");
    const [notification, setNotification] = useState(false);

    const token = localStorage.getItem("token");
    const[showSidebar, setShowSidebar] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const configuration = {
          method: "get",
          url: "http://localhost:8080/api/v1/user/profile",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
    
        axios(configuration)
          .then((result) => {
            setInfo(result.data.user.username);
            setNotification(true);
            
          })
          .catch((err) => {
            console.log(err);
          });
      }, [token, setInfo]);

    //   console.log(notification)

    
    const logout = () => {
        localStorage.removeItem("token");

        window.location.href = "/login";
        console.log("tokennnnnnn")
      };

    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: notification ? info : "Login" ,
            path: notification ? "" : "/login",
            icon: faCog
        },
        {
            name: notification ? "Logout" : "",
            onClick: logout
        }
    ]

    function closeSidebar(){
        setShowSidebar(false)
    }

   
    
    
    return(
        <>
            <div className="navbar container">
            <Link to="/" className="logo">
            <FontAwesomeIcon icon={faUtensils}/>  <span>THE</span>RECIPE<span>HUB</span>
            </Link>
            <div className="nav-links">
                {links.map(links => (
                    <Link className={location.pathname === Link.path ? "active": ""} 
                    to={links.path} key={links.name}
                    onClick = {links.onClick}
                    >{links.name}</Link>
                ))}
                {/* <button className = "active" onClick={logout}>Logout</button> */}
                
            </div>
            <div onClick={() => setShowSidebar(true)} className={showSidebar? "sidebar-btn active" : "sidebar-btn"} >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
        {showSidebar && <Sidebar close = {closeSidebar} links = {links} />}
        
        </>
    )
}