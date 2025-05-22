"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const Navbar = ({ profile }) => {
    const location = useRouter();
    const [navMenu, setNavMenu] = useState(false);

    useEffect(() => {
        setNavMenu(false);
    }, [location]);

    return (
        <>
            <header className="bg-white fixed w-full z-20 top-0 start-0">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="inline-flex-1 md:flex md:items-center md:gap-4">
                            <Link href={"/"} className="block text-teal-600">
                                <span className="sr-only">Beranda</span>
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src={
                                        profile.logo != undefined &&
                                        profile.logo != "" &&
                                        profile.logo != null
                                            ? `${process.env.NEXT_PUBLIC_BASE_URL}/storage/Profile/Logo/${profile.logo}`
                                            : ""
                                    }
                                    alt=""
                                />
                            </Link>
                            <Link
                                href={"/"}
                                className="hidden md:block text-xl font-bold uppercase"
                            >
                                Tracer Study
                            </Link>
                        </div>
                        <div className="md:flex md:items-center md:gap-12">
                            <nav
                                aria-label="Global"
                                className="hidden md:block"
                            >
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <Link
                                            className={
                                                (location.pathname == "/"
                                                    ? "text-teal-600 hover:text-teal-400 font-semibold"
                                                    : "text-gray-500 hover:text-gray-500/75") +
                                                " transition"
                                            }
                                            href={"/"}
                                        >
                                            Beranda
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={
                                                (location.pathname ==
                                                "/lowongan"
                                                    ? "text-teal-600 hover:text-teal-400 font-semibold"
                                                    : "text-gray-500 hover:text-gray-500/75") +
                                                " transition"
                                            }
                                            href={"/lowongan"}
                                        >
                                            Lowongan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={
                                                (location.pathname == "/faq"
                                                    ? "text-teal-600 hover:text-teal-400 font-semibold"
                                                    : "text-gray-500 hover:text-gray-500/75") +
                                                " transition"
                                            }
                                            href={"/faq"}
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={
                                                (location.pathname ==
                                                "/kuisioner"
                                                    ? "text-teal-600 hover:text-teal-400 font-semibold"
                                                    : "text-gray-500 hover:text-gray-500/75") +
                                                " transition"
                                            }
                                            href={"/kuisioner"}
                                        >
                                            Kuisioner
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="flex items-center gap-4">
                                <div className="sm:flex sm:gap-4">
                                    {Cookies.get("token") === undefined ? (
                                        <Link
                                            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                            href={"/login"}
                                        >
                                            Login
                                        </Link>
                                    ) : (
                                        <Link
                                            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                            href={"/dashboard"}
                                        >
                                            Dashboard
                                        </Link>
                                    )}
                                </div>
                                <div className="block md:hidden">
                                    <button
                                        className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                        onClick={() =>
                                            setNavMenu((navMenu) => !navMenu)
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div
                className={
                    (navMenu ? "" : "translate-x-full") +
                    " fixed right-0 top-0 hidden z-30 mt-16 h-screen w-64 overflow-y-auto bg-white p-4 transition-transform max-md:block"
                }
            >
                <div className="overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                href={"/"}
                                className={
                                    (location.pathname == "/"
                                        ? "bg-teal-600 text-white hover:bg-teal-500"
                                        : "text-black hover:text-teal-700") +
                                    " block rounded py-2 pl-3 pr-4 lg:bg-transparent lg:p-0"
                                }
                            >
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/lowongan"}
                                className={
                                    (location.pathname == "/lowongan"
                                        ? "bg-teal-600 text-white hover:bg-teal-500"
                                        : "text-black hover:text-teal-700") +
                                    " block rounded py-2 pl-3 pr-4 lg:bg-transparent lg:p-0"
                                }
                            >
                                Lowongan
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/faq"}
                                className={
                                    (location.pathname == "/faq"
                                        ? "bg-teal-600 text-white hover:bg-teal-500"
                                        : "text-black hover:text-teal-700") +
                                    " block rounded py-2 pl-3 pr-4 lg:bg-transparent lg:p-0"
                                }
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"/faq"}
                                className={
                                    (location.pathname == "/kuisioner"
                                        ? "bg-teal-600 text-white hover:bg-teal-500"
                                        : "text-black hover:text-teal-700") +
                                    " block rounded py-2 pl-3 pr-4 lg:bg-transparent lg:p-0"
                                }
                            >
                                Kuisioner
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
