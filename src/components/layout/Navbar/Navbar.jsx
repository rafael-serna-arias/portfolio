import "./navbar.scss"
import { Link } from "react-router-dom";


import { useState } from "react";
import MenuIcon from "../../ui/icons/MenuIcon/MenuIcon";
import CloseIcon from "../../ui/icons/CloseIcon/CloseIcon";

import HomeImg from "@/assets/images/navbar/home.webp"
export default function Navbar () {

    
    const [isOpen, setIsOpen] = useState(false)

   
    
    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }


    return (
        <nav className="navbar">

            <Link
                to={"/"}
            >
                <button className="navbar__hola">
                    <img src={HomeImg} alt="" />
                </button>
            </Link>



            <button
                className={`navbar__menu-icon ${isOpen && "active"}`}
                onClick={toggleMenu}
            >
                <MenuIcon />
            </button>

            <button
                className={`navbar__close-icon ${isOpen && "active"}`}
                onClick={toggleMenu}
            >
                <CloseIcon 
                    size="36px"
                    color="#042623"
                />
            </button>




            <div className="navbar__desktop">     
                <div className="navbar__links">
                    <Link
                        
                        to={"/projects/styleGuide"}
                    >
                        <p>Style guide</p>
                    </Link>
                    
                    <div className="navbar__link">
                        <Link
                            to={"/work"}
                        >
                            <p>Work</p>
                        </Link>
                        <Link
                            to={"/contact"}
                        >
                          <p>Contact</p>
                        </Link>
                    </div>
                </div>
            </div>




          
                    
            <div className={`navbar__mobil ${isOpen && "active"}`}>

                <div className="navbar__container-items">
                    <div className="navbar__top-texts">
                        <div className="navbar__item">
                            <Link
                                to={"./work"}
                                onClick={toggleMenu}
                            >
                                <span>Work</span>

                            </Link>
                            <div className="navbar__line"></div>
                        </div>
                        <div className="navbar__item">
                            <Link
                            onClick={toggleMenu}
                            to={"/contact"}>
                                <span>Contact</span>

                            </Link>
                            <div className="navbar__line"></div>
                        </div>
                    </div>
                    <div className="navbar__item navbar__item--emphasis">
                        <Link
                        onClick={toggleMenu}
                        to={"/projects/styleGuide"}>
                            <span>Style-guide</span>
                        </Link>
                        <div className="navbar__line"></div>
                    </div>
                
                </div>        
            
            </div>
            
           







        </nav>
    )
}