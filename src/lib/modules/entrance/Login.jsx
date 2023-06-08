import { useState } from "react";
import image from "../../../assets/others/authentication2.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import logo from "../../../assets/icons/logo.png"

const Login = () => {
    const [open, setOpen] = useState({
        password: false,
    });

    return (
        <div className="BG-IMAGE lg:px-40 lg:py-40">
            <div className="lg:shadow-xl lg:rounded-md min-h-screen lg:min-h-full flex flex-row-reverse justify-center items-center py-10 px-5 md:px-10 lg:py-20">
                <div className="w-full lg:w-6/12">
                    <div className="flex justify-center">
                        <Link to={"/"}>
                            <img
                                className="w-28 h-auto cursor-pointer"
                                src={logo}
                                alt=""
                            />
                        </Link>
                    </div>
                    <h3 className="my-3 text-3xl font-bold text-center text-neutral">
                        Log In
                    </h3>
                    <form className="md:w-7/12 mx-auto space-y-4 font-semibold">
                        <div>
                            <label
                                className="block ml-2 text-sm font-medium text-neutral"
                                htmlFor="LoggingEmailAddress"
                            >
                                Email
                            </label>
                            <div className="relative flex items-center mt-1">
                                <span className="absolute">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-3 text-neutral/30"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </span>

                                <input
                                    type="email"
                                    name="email"
                                    className="block w-full py-3 text-neutral bg-white border rounded-lg px-11"
                                    placeholder="Email address"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                className="block ml-2 text-sm font-medium text-neutral"
                                htmlFor="Password"
                            >
                                Password
                            </label>
                            <div className="relative flex items-center mt-1">
                                <span className="absolute">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-3 text-neutral/30"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                        />
                                    </svg>
                                </span>

                                {open.password ? (
                                    <span
                                        onClick={() =>
                                            setOpen((prevState) => ({
                                                ...prevState,
                                                password: false,
                                            }))
                                        }
                                        className="absolute right-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 mx-3 text-neutral/30 hover:text-neutral/75 cursor-pointer"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </span>
                                ) : (
                                    <span
                                        onClick={() =>
                                            setOpen((prevState) => ({
                                                ...prevState,
                                                password: true,
                                            }))
                                        }
                                        className="absolute right-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 mx-3 text-neutral/30 hover:text-neutral/75 cursor-pointer"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                            />
                                        </svg>
                                    </span>
                                )}

                                <input
                                    type={`${
                                        open.password ? "text" : "password"
                                    }`}
                                    name="password"
                                    className="block w-full py-3 text-neutral bg-white border rounded-lg px-11"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="">
                            <Button
                                type="submit"
                                className={"w-full font-bold"}
                            >
                                Log In
                            </Button>
                        </div>

                        <div className="flex items-center justify-center py-4 text-center">
                            <span className="text-sm text-neutral ">
                                {`Don't have an account?`}{" "}
                            </span>

                            <Link
                                to="/register"
                                className="mx-2 text-sm font-bold text-primary hover:underline"
                            >
                                Register
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="hidden lg:w-6/12 lg:flex justify-center items-center">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;