import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from '../../../public/logo.svg'
const Navbar = () => {
    const [active, setActive] = useState(false);
    const links = [

        {
            id: 1,
            link: "About Us",
            subLinks: [
                {
                    id: 21,
                    link: "Company Profile",
                    path: "/company-profile"
                },
                { id: 22, link: "Leadership", path: "/leadership" },
            ],
        },
        {
            id: 2,
            link: "About Us",
            path: "/",
        },
        {
            id: 3,
            link: "Services",
            subLinks: [
                { id: 31, link: "Workforce Management", path: "/service1" },
                {
                    id: 32, link: "Operating Asset Management", path: "/service2", subLinks: [
                        {
                            id: 321,
                            link: "Security services",
                            path: "/",
                        },
                        {
                            id: 322,
                            link: "Construction",
                            path: "/",
                        },
                        {
                            id: 323,
                            link: "Developer work",
                            path: "/",
                        },
                        {
                            id: 324,
                            link: "Property management work",
                            path: "/",
                        },
                        {
                            id: 325,
                            link: "Material Supply to Govt & Non Govt sector",
                            path: "/",
                        },
                    ]
                },
            ],
        },
        {
            id: 4,
            link: "Product",
            path: "/product",
        },
        {
            id: 5,
            link: "Contact Us",
            path: "/contact",
        },
    ];

    const toggleMenu = () => {
        setActive(!active);
    };

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="BHUPIKA ENTERPRISES" />
            </div>
            <div
                className={`togglemenu ${active ? "active" : ""}`}
                onClick={toggleMenu}
            ></div>
            <nav className={`navbar ${active ? "active" : ""}`}>
                <ul className="menu">
                    {links.map(({ id, link, path, subLinks }) => (
                        <li key={id} className="link">
                            <Link to={path}>{link} {subLinks && <b> ▼</b>}</Link>
                            {subLinks && (
                                <ul className="submenu">
                                    {subLinks.map(
                                        ({
                                            id: subId,
                                            link: subLink,
                                            path: subPath,
                                            subLinks: nestedSubLinks,
                                        }) => (
                                            <li key={subId} className="sublink">
                                                <Link to={subPath}>{subLink} {nestedSubLinks && <b> ▼</b>}</Link>
                                                {nestedSubLinks && (
                                                    <ul className="nested-submenu">
                                                        {nestedSubLinks.map(
                                                            ({
                                                                id: nestedSubId,
                                                                link: nestedSubLink,
                                                                path: nestedSubPath,
                                                            }) => (
                                                                <li
                                                                    key={nestedSubId}
                                                                    className="nested-sublink"
                                                                >
                                                                    <Link to={nestedSubPath}>
                                                                        {nestedSubLink}
                                                                    </Link>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                )}
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
