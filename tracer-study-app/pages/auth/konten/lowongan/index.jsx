"use client";

import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { TableData } from "@/components/TableData";
import { ButtonDelete } from "@/components/ButtonDelete";
import { ButtonPagination } from "@/components/ButtonPagination";
import { Loader } from "@/components/Loader";
import Link from "next/link";
import AxiosInstance from "@/utils/axiosInstance";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function MasterLowonganPage() {
    let navigate = useRouter();
    const [loader, setLoader] = useState(false);
    const [reloadTable, setReloadTable] = useState(false);
    const [buttonPage, setButtonPage] = useState([]);
    let [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [paginate, setPaginate] = useState(10);
    const [allData, setAllData] = useState({
        current_page: 1,
        data: [],
        first_page_url: "",
        from: 1,
        last_page: 1,
        last_page_url: "",
        links: "",
        next_page_url: null,
        path: "",
        per_page: 10,
        prev_page_url: null,
        to: 2,
        total: 1,
    });

    const tanggal = (value) => {
        return new Date(value).toLocaleString("id", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    useEffect(() => {
        setLoader(true);
        setReloadTable(false);
        AxiosInstance.get(
            `/konten/lowongan?page=${page}&q=${search}&paginate=${paginate}`
        )
            .then((res) => {
                setAllData({
                    current_page: res.data.current_page,
                    data: [...res.data.data],
                    first_page_url: res.data.first_page_url,
                    from: res.data.from,
                    last_page: res.data.last_page,
                    last_page_url: res.data.last_page_url,
                    links: res.data.links,
                    next_page_url: res.data.next_page_url,
                    path: res.data.path,
                    per_page: res.data.per_page,
                    prev_page_url: res.data.prev_page_url,
                    to: res.data.to,
                    total: res.data.total,
                });
                setPage(res.data.current_page);
                setLoader(false);
            })
            .catch((error) => {
                if (error.response.status == 403) {
                    Swal.fire({
                        title: "Error!",
                        text: "Token Expired, Silahkan Login Kembali",
                        icon: "error",
                    });
                    Cookies.remove("token");
                    navigate.push("/");
                } else {
                    alert(error.response.data.error);
                }
                setLoader(false);
            });
    }, [
        page,
        setPage,
        paginate,
        setPaginate,
        search,
        setSearch,
        reloadTable,
        setReloadTable,
    ]);

    useEffect(() => {
        const button = Math.min(5, allData.last_page);
        let first = allData.current_page - Math.floor(button / 2);
        first = Math.max(first, 1);
        first = Math.min(first, allData.last_page - button + 1);
        setButtonPage([...Array(button)].map((k, i) => i + first));
    }, [allData, setAllData]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Kamu Yakin?",
            text: "Data Akan Dihapus!",
            icon: "info",
            showCancelButton: true,
            reverseButtons: true,
            confirmButtonText: "Ya!",
            cancelButtonText: "Batal",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Now Loading!",
                    didOpen: () => {
                        Swal.showLoading();
                    },
                });
                AxiosInstance.delete(`/konten/lowongan/delete/${id}`)
                    .then((res) => {
                        setReloadTable(true);
                        Swal.fire({
                            title: "Success!",
                            text: "Data Berhasil Dihapus.",
                            icon: "success",
                        });
                    })
                    .catch((error) => {
                        if (error.response.status == 403) {
                            Swal.fire({
                                title: "Error!",
                                text: "Token Expired, Silahkan Login Kembali",
                                icon: "error",
                            });
                            Cookies.remove("token");
                            navigate.push("/");
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: error.response.data.error,
                                icon: "error",
                            });
                        }
                    });
            }
        });
    };

    return (
        <>
            <DashboardLayout title="Master Lowongan Pekerjaan">
                <div className="w-full px-4 py-2 mt-12">
                    <div className="relative overflow-x-auto shadow-xl sm:rounded-lg">
                        <TableData
                            head={["Judul", "Perusahaan", "Periode", "Aksi"]}
                            label={"Data Lowongan Pekerjaan"}
                            filter={false}
                            pagination={paginate}
                            changePagination={(e) =>
                                setPaginate(e.target.value)
                            }
                            inputsearch={search}
                            changeSearch={(e) => setSearch(e.target.value)}
                            buttonModal={() =>
                                navigate.push("/auth/konten/lowongan/create")
                            }
                        >
                            {allData.data.length > 0 ? (
                                loader == false ? (
                                    allData.data.map((all, i) => {
                                        return (
                                            <tr
                                                key={i}
                                                className="bg-white border-b"
                                            >
                                                <th
                                                    scope="row"
                                                    className="py-4 text-center font-semibold text-gray-900 whitespace-nowrap"
                                                >
                                                    {i + allData.from}
                                                </th>
                                                <td className="px-6 py-4 text-black">
                                                    {all.judul_lowongan}
                                                </td>
                                                <td className="px-6 py-4 text-black">
                                                    {all.nama_perusahaan}
                                                </td>
                                                <td className="px-6 py-4 text-black">
                                                    {tanggal(all.tanggal_mulai)}{" "}
                                                    s/d{" "}
                                                    {tanggal(
                                                        all.tanggal_selesai
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 text-black">
                                                    <div>
                                                        <Link
                                                            type="button"
                                                            href={`/auth/konten/lowongan/edit/${all.slug}`}
                                                            className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center me-2"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="1.5"
                                                                stroke="currentColor"
                                                                className="w-5 h-5"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                                                />
                                                            </svg>
                                                        </Link>
                                                        <ButtonDelete
                                                            click={() =>
                                                                handleDelete(
                                                                    all.id
                                                                )
                                                            }
                                                        ></ButtonDelete>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr className="bg-white border-b">
                                        <td
                                            colSpan={5}
                                            className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            <div className="flex w-full justify-center">
                                                <Loader></Loader>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            ) : (
                                <tr className="bg-white border-b">
                                    <td
                                        colSpan={5}
                                        className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        {loader == true ? (
                                            <div className="flex w-full justify-center">
                                                <Loader></Loader>
                                            </div>
                                        ) : (
                                            "Belum Ada Data"
                                        )}
                                    </td>
                                </tr>
                            )}
                        </TableData>
                        <div className="p-5">
                            <ButtonPagination
                                from={allData.from}
                                href={allData.to}
                                total={allData.total}
                                next_page_url={allData.next_page_url}
                                prev_page_url={allData.prev_page_url}
                                nextPage={() => setPage(page++)}
                                prevPage={() => setPage(page--)}
                            >
                                {buttonPage.map((btn, i) => {
                                    return (
                                        <li key={i}>
                                            <button
                                                onClick={() => setPage(btn)}
                                                className={
                                                    "flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:text-gray-700 " +
                                                    (page == btn
                                                        ? "bg-teal-400 hover:bg-teal-600 text-gray-700"
                                                        : "bg-white hover:bg-gray-100 text-gray-500")
                                                }
                                            >
                                                {btn}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ButtonPagination>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        </>
    );
}
