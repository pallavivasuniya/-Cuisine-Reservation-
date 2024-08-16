import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { data } from '../restApi.json';

const Navbar = () => {
    const [show, setShow] = useState(false); // Corrected useState

    return (
        <nav>
            <div className="logo">Pallavi</div>
            <div className={show ? "navlinks showmenu" : "navlinks"}>
                <div className="links">
                    {
                        data[0].navbarLinks.map((element) => { // Removed extra curly braces
                            return (
                                <Link
                                    to={element.link}
                                    key={element.id}
                                    spy={true}
                                    smooth={true}
                                    duration={500}>
                                    {element.title}
                                </Link>
                            );
                        })
                    }
                </div>
                <button className="menubtn">OUR MENU</button>
            </div>
            <div className="hamburger" onClick={() => setShow(!show)}>
                <GiHamburgerMenu />
            </div>
        </nav>
    );
};

export default Navbar; // Corrected export statement
