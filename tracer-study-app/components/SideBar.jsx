"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export const SideBar = () => {
    const location = useRouter();
    const { slug, uuid, params } = location.query;

    const [menuPertanyaan, setMenuPertanyaan] = useState(false);
    const [menuKonten, setMenuKonten] = useState(false);
    const [menuMaster, setMenuMaster] = useState(false);
    const [menuHasil, setMenuHasil] = useState(false);

    useEffect(() => {
        setMenuKonten(false);
        setMenuPertanyaan(false);
        setMenuMaster(false);
        setMenuHasil(false);
        if (
            location.pathname == "/auth/master/program-studi" ||
            location.pathname == "/auth/master/fakultas" ||
            location.pathname == "/auth/master/alumni" ||
            location.pathname == "/auth/master/dosen"
        ) {
            setMenuMaster((menuMaster) => !menuMaster);
        } else if (
            location.pathname == "/auth/konten/lowongan" ||
            location.pathname == "/auth/konten/lowongan/create" ||
            location.pathname == `/auth/konten/lowongan/edit/${slug}` ||
            location.pathname == "/auth/konten/konten-website" ||
            location.pathname == "/auth/konten/faq"
        ) {
            setMenuKonten((menuKonten) => !menuKonten);
        } else if (
            location.pathname == "/auth/pertanyaan/kategori-pertanyaan" ||
            location.pathname == "/auth/pertanyaan" ||
            location.pathname == "/auth/pertanyaan/create" ||
            location.pathname == `/auth/pertanyaan/edit/${uuid}`
        ) {
            setMenuPertanyaan((menuPertanyaan) => !menuPertanyaan);
        } else if (
            location.pathname == "/auth/hasil-kuisioner" ||
            location.pathname == `/auth/hasil-kuisioner/${uuid}` ||
            location.pathname == "/auth/statistik" ||
            location.pathname ==
                `/auth/statistik/per-kategori/${params?.[0]}/${params?.[1]}` ||
            location.pathname ==
                `/auth/statistik/per-pertanyaan/${params?.[0]}/${params?.[1]}`
        ) {
            setMenuHasil((menuHasil) => !menuHasil);
        }
    }, [location]);

    return (
        <>
            <aside className="fixed top-0 left-0 z-40 w-72 py-3 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                    <div>
                        <Link href={"/"} className="flex ms-2 md:me-24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-8 me-3"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                                />
                            </svg>
                            <span className="self-center text-xl font-semibold whitespace-nowrap">
                                Tracer Study
                            </span>
                        </Link>
                    </div>
                    <ul className="space-y-2 px-2 font-medium pt-8">
                        <li>
                            <Link
                                href={"/auth/dashboard"}
                                className={
                                    (location.pathname == "/auth/dashboard"
                                        ? "bg-teal-500"
                                        : "") +
                                    " flex items-center p-2 text-black rounded-lg hover:bg-teal-500"
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-black transition duration-75 group-hover:text-black"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                                    />
                                </svg>
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() =>
                                    setMenuMaster((menuMaster) => !menuMaster)
                                }
                                className="flex items-center w-full p-2 text-base text-black transition duration-75 rounded-lg group hover:bg-teal-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-black transition duration-75 group-hover:text-black"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                                    />
                                </svg>
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                                    Master
                                </span>
                                <svg
                                    className={
                                        (menuMaster ? "rotate-180" : "") +
                                        " w-3 h-3 transition duration-75"
                                    }
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            <ul
                                className={
                                    (menuMaster ? "" : "hidden") +
                                    " py-2 space-y-2"
                                }
                            >
                                <li>
                                    <Link
                                        href={"/auth/master/fakultas"}
                                        className={
                                            (location.pathname ==
                                            "/auth/master/fakultas"
                                                ? "bg-teal-500"
                                                : "") +
                                            " flex items-center text-sm w-full p-2 text-black transition duration-75 rounded-lg pl-11 group hover:bg-teal-500"
                                        }
                                    >
                                        Fakultas
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"/auth/master/program-studi"}
                                        className={
                                            (location.pathname ==
                                            "/auth/master/program-studi"
                                                ? "bg-teal-500"
                                                : "") +
                                            " flex items-center text-sm w-full p-2 text-black transition duration-75 rounded-lg pl-11 group hover:bg-teal-500"
                                        }
                                    >
                                        Program Studi
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"/auth/master/alumni"}
                                        className={
                                            (location.pathname ==
                                            "/auth/master/alumni"
                                                ? "bg-teal-500"
                                                : "") +
                                            " flex items-center text-sm w-full p-2 text-black transition duration-75 rounded-lg pl-11 group hover:bg-teal-500"
                                        }
                                    >
                                        Alumni
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"/auth/master/dosen"}
                                        className={
                                            (location.pathname ==
                                            "/auth/master/dosen"
                                                ? "bg-teal-500"
                                                : "") +
                                            " flex items-center text-sm w-full p-2 text-black transition duration-75 rounded-lg pl-11 group hover:bg-teal-500"
                                        }
                                    >
                                        Dosen
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() =>
                                    setMenuPertanyaan(
                                        (menuPertanyaan) => !menuPertanyaan
                                    )
                                }
                                className="flex items-center w-full p-2 text-base text-black transition duration-75 rounded-lg group hover:bg-teal-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="flex-shrink-0 w-5 h-5 text-black transition duration-75 group-hover:text-black"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                                    />
                                </svg>
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                                    Pertanyaan
                                </span>
                                <svg
                                    className={
                                        (menuPertanyaan ? "rotate-180" : "") +
                                        " w-3 h-3 transition duration-75"
                                    }
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            <ul
                                className={
                                    (menuPertanyaan ? "" : "hidden") +
                                    " py-2 space-y-2"
                                }
                            >
                                <li>
                                    <Link
                                        href={
                                            "/auth/pertanyaan/kategori-pertanyaan"
                                        }
                                        className={
                                            (location.pathname ==
                                            "/auth/pertanyaan/kategori-pertanyaan"
                                                ? "bg-teal-500"
                                                : "") +
                                            " flex items-center text-sm w-full p-2 text-black transition duration-75 rounded-lg pl-11 group hover:bg-teal-500"
                                        }
                                    >
                                        Kategori
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"/auth/pertanyaan"}
                                        className={
                                            (location.pathname ==
                                                "/auth/pertanyaan" ||
                                            location.pathname ==
                                                "/auth/pertanyaan/create" ||
                                            location.pathname ==
                                                `/auth/pertanyaan/edit/${uuid}`
                                                ? "bg-teal-500"
                                                : "") +
                                            " flex items-center text-sm w-full p-2 text-black transition duration-75 rounded-lg pl-11 group hover:bg-teal-500"
                                        }
                                    >
                                        Pertanyaan
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() =>
                                    setMenuHasil((menuHasil) => !menuHasil)
                                }
                                className="flex items-center w-full p-2 text-base text-black transition duration-75 rounded-lg group hover:bg-teal-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-black transition duration-75 group-hover:text-black"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                                    />
                                </svg>

                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                                    Hasil Kuisioner
                                </span>
                                <svg
                                    className={
                                        (menuHasil ? "rotate-180" : "") +
                                        " w-3 h-3 transition duration-75"
                                    }
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            <ul
                                className={
                                    (menuHasil ? "" : "hidden") +
                                    " py-2 space-y-2"
                                }
                            >
                                <li>
                                    <Link
                                        href={"/auth/hasil-kuisioner"}
                                        className={
                                            (location.pathname ==
                                                "/auth/hasil-kuisioner" ||
                                            location.pathname ==
                                                `/auth/hasil-kuisioner/${uuid}`
                                                ? "bg-teal-500"
                                                : "") +
                                            " flex items-center text-sm w-full p-2 text-black transition duration-75 rounded-lg pl-11 group hover:bg-teal-500"
                                        }
                                    >
                                        Hasil Kuisioner
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"/auth/hasil-kuisioner/statistik"}
                                        className={
                                            (location.pathname ==
                                                "/auth/hasil-kuisioner/statistik" ||
                                            location.pathname ==
                                                `/auth/hasil-kuisioner/statistik/per-kategori/${params?.[0]}/${params?.[1]}` ||
                                            location.pathname ==
                                                `/auth/hasil-kuisioner/statistik/per-pertanyaan/${params?.[0]}/${params?.[1]}`
                                                ? "bg-teal-500"
                                                : "") +
                                            " flex items-center text-sm w-full p-2 text-black transition duration-75 rounded-lg pl-11 group hover:bg-teal-500"
                                        }
                                    >
                                        Statistik
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() =>
                                    setMenuKonten((menuKonten) => !menuKonten)
                                }
                                className="flex items-center w-full p-2 text-base text-black transition duration-75 rounded-lg group hover:bg-teal-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-black transition duration-75 group-hover:text-black"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                                    />
                                </svg>
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                                    Konten
                                </span>
                                <svg
                                    className={
                                        (menuKonten ? "rotate-180" : "") +
                                        " w-3 h-3 transition duration-75"
                                    }
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            <ul
                                className={
                                    (menuKonten ? "" : "hidden") +
                                    " py-2 space-y-2"
                                }
                            >
                                <li>
                                    <Link
                                        href={"/auth/konten/lowongan"}
                                        className={
                                            (location.pathname ==
                                                "/auth/konten/lowongan" ||
                                            location.pathname ==
                                                `/auth/konten/lowongan/edit/${slug}` ||
                                            location.pathname ==
                                                "/auth/konten/lowongan/create"
                                                ? "bg-teal-500"
                                                : "") +
                                            " flex items-center text-sm w-full p-2 text-black transition duration-75 rounded-lg pl-11 group hover:bg-teal-500"
                                        }
                                    >
                                        Lowongan Pekerjaan
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"/auth/konten/faq"}
                                        className={
                                            (location.pathname == "/konten/faq"
                                                ? "bg-teal-500"
                                                : "") +
                                            " flex items-center text-sm w-full p-2 text-black transition duration-75 rounded-lg pl-11 group hover:bg-teal-500"
                                        }
                                    >
                                        {"FAQ's"}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"/auth/konten/konten-website"}
                                        className={
                                            (location.pathname ==
                                            "/auth/konten/konten-website"
                                                ? "bg-teal-500"
                                                : "") +
                                            " flex items-center text-sm w-full p-2 text-black transition duration-75 rounded-lg pl-11 group hover:bg-teal-500"
                                        }
                                    >
                                        Konten Website
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link
                                href={"/auth/dashboard/profile"}
                                className={
                                    (location.pathname ==
                                    "/auth/dashboard/profile"
                                        ? "bg-teal-500"
                                        : "") +
                                    " flex items-center p-2 text-black rounded-lg hover:bg-teal-500"
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-black transition duration-75 group-hover:text-black"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                                    />
                                </svg>
                                <span className="ms-3">Profile</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
};
