import { useState } from "react";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { VscThreeBars } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/logo-text.png"
import Button from "./Button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menus = [
        { name: "Home", link: "/home" },
        { name: "Contact Us", link: "/about" },
        { name: "Dashboard", link: "/products" },
        { name: "Our Menu", link: "/contact" },
        { name: "Our Shop", link: "/contact" },
    ];
    return (
        <div className="shadow-md w-full fixed bg-black/20 top-0 z-10">
            <div className="flex items-center justify-between py-4 md:px-14 px-7">
                <Link to={"/"}>
                    <img className="w-36 h-auto" src={logo} alt="" />
                </Link>
                <div className="flex items-center">
                    <div className="relative mr-14 md:hidden">
                        <small className="absolute top-[-10px] right-[-10px] bg-primary text-white rounded-full text-xs p-1 pl-[5px] w-5 h-5 flex justify-center items-center">
                            0
                        </small>
                        <AiOutlineShoppingCart className="text-2xl font-medium" />
                    </div>
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-3xl absolute right-8 cursor-pointer md:hidden"
                    >
                        {isOpen ? (
                            <CgClose className="text-primary" />
                        ) : (
                            <VscThreeBars className="text-primary" />
                        )}
                    </div>
                </div>

                <ul
                    className={`w-full text-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 md:w-auto transition-all duration-500 ease-in ${
                        isOpen ? "top-20 " : "top-[-490px]"
                    } ${
                        isOpen &&
                        "h-screen flex items-center justify-center mt-[-5rem]"
                    }`}
                >
                    <div className="md:flex md:items-center space-y-7 md:space-y-0 md:space-x-5">
                        {menus.map((menu, index) => (
                            <li key={index} className="text-xl md:my-0 my-7">
                                <Link
                                    to={menu.link}
                                    onClick={() => setIsOpen(false)}
                                    className="hover:text-primary uppercase text-white font-bold duration-500"
                                >
                                    {menu.name}
                                </Link>
                            </li>
                        ))}
                        <button className="relative hidden md:block">
                            <small className="absolute top-[-10px] right-[-10px] bg-primary text-white rounded-full text-xs p-1 pl-[5px] w-5 h-5 flex justify-center items-center">
                                0
                            </small>
                            <AiOutlineShoppingCart className="text-2xl font-medium text-white" />
                        </button>
                        <Button>Log In</Button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
