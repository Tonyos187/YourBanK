import { useState } from "react"; // Import useState for managing state
import { Link, NavLink } from "react-router-dom";
import { Logo, LogoText } from "../Data/Logo.jsx";
import { HamMenu } from "../Data/HamMenu.jsx";
import Button from "./Button.jsx";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Security", path: "/security" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex justify-between items-center bg-gray py-[14px] pl-[24px] pr-[14px] md:px-[24px] md:py-[14px] lg:px-[34px] lg:py-[20px] fixed top-40 md:top-30 lg:top-50 rounded-full border border-lightGray w-[91.7949%] md:w-[88.8888%] lg:w-[83.125%] self-center">

            <div className="flex items-center gap-[3px] w-[102px] md:w-[161px] lg:w-[208px] lg:h-40">
                <div className="w-[26px] h-[26px] md:w-30 md:h-30 lg:w-40 lg:h-40 flex justify-center items-center">
                    <Logo className="w-[21.67px] h-[21.67px] md:w-[25px] md:h-[25px] lg:w-[33.33px] lg:h-[33.33px]" />
                </div>
                <LogoText className="w-[72.58px] md:w-[83.75px] lg:w-[111.67px] h-[11.92px] md:h-[13.75px] lg:h-[18.33px]" />
            </div>

            <div className="hidden md:flex justify-between items-center md:w-[306px] lg:w-[371px]">
                {navLinks.map(({ name, path }) => (
                    <NavLink
                        key={path}
                        to={path}
                        className={({ isActive }) =>
                            `text-white text-bodySm md:text-bodyMd lg:text-bodyLg hover:text-lightGreen transition duration-300 ${isActive ? "md:px-[18px] md:py-[10px] lg:px-24 lg:py-[12px] rounded-full bg-lightGray" : ""
                            }`
                        }
                    >
                        {name}
                    </NavLink>
                ))}
            </div>

            <div className="hidden md:flex justify-between items-center gap-[3px] md:w-[161px] lg:w-[208px]">
                <Link to="/signup">
                    <Button className="text-white hover:text-lightGreen">Sign Up</Button>
                </Link>
                <Link to="/login">
                    <Button className="flex justify-center items-center md:w-[87px] lg:w-[109px] md:h-[45px] lg:h-[55px] bg-lightGreen text-gray rounded-full hover:text-white hover:bg-darkGray hover:shadow-sm hover:shadow-lightGray">
                        Log In
                    </Button>
                </Link>
            </div>

            {/* Hamburger menu */}
            <div className="flex justify-center items-center rounded-full md:hidden bg-lightGreen w-[56px] h-40 " onClick={toggleMenu}>
                <HamMenu className="w-[21px] h-[14px]" />
            </div>

            {/* Conditional rendering for the mobile menu */}
            {isMenuOpen && (
                <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 bg-gray w-full md:w-[88.8888%] lg:w-[83.125%] rounded-lg shadow-lg p-4 flex flex-col gap-4 items-center">
                    {navLinks.map(({ name, path }) => (
                        <NavLink
                            key={path}
                            to={path}
                            onClick={toggleMenu} // Close the menu when a link is clicked
                            className="text-white text-bodySm md:text-bodyMd lg:text-bodyLg hover:text-lightGreen transition duration-300"
                        >
                            {name}
                        </NavLink>
                    ))}
                    <Link to="/signup" onClick={toggleMenu}>
                        <Button className="text-white hover:text-lightGreen">Sign Up</Button>
                    </Link>
                    <Link to="/login" onClick={toggleMenu}>
                        <Button className="flex justify-center items-center text-white md:w-[87px] lg:w-[109px] md:h-[45px] lg:h-[55px] md:bg-lightGreen md:text-gray rounded-full hover:text-white hover:bg-darkGray hover:shadow-sm hover:shadow-lightGray">
                            Log In
                        </Button>
                    </Link>
                </div>
            )}

        </nav>
    );
};

export default Navbar;