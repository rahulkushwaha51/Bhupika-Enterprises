import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const links = [
        {
            id: 1,
            link: "Home",
            path: "/",
        },
        {
            id: 2,
            link: "Courses ▼",
            subLinks: [
                {
                    id: 21,
                    link: "Course1 ▼",
                    subLinks: [
                        { id: 211, link: "Subcourse 1", path: "/course1/sub1" },
                        { id: 212, link: "Subcourse 2", path: "/course1/sub2" },
                    ],
                },
                { id: 22, link: "Course 2", path: "/course2" },
            ],
        },
        {
            id: 3,
            link: "Services ▼",
            subLinks: [
                { id: 31, link: "Service 1", path: "/service1" },
                { id: 32, link: "Service 2", path: "/service2" },
            ],
        },
        {
            id: 4,
            link: "About",
            path: "/about",
        },
        {
            id: 5,
            link: "Contact",
            path: "/contact",
        },
    ];

    const toggleMenu = () => {
        setActive(!active);
    };

    return (
        <header>
            <div className="logo">Rahul</div>
            <div
                className={`togglemenu ${active ? "active" : ""}`}
                onClick={toggleMenu}
            ></div>
            <nav className={`navbar ${active ? "active" : ""}`}>
                <ul className="menu">
                    {links.map(({ id, link, path, subLinks }) => (
                        <li key={id} className="link">
                            <Link to={path}>{link}</Link>
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
                                                <Link to={subPath}>{subLink}</Link>
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
