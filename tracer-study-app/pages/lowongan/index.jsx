import { GuestLayout } from "@/components/layouts/GuestLayout";
import fetchData from "@/lib/fetchData";
import { LowonganViews } from "@/views/LowonganViews";

export const getServerSideProps = async (context) => {
    const { query } = context;

    const {
        ordering = "",
        daritanggal = "",
        ketanggal = "",
        bidang_usaha = "",
        prodi = "",
    } = query;

    const qs = new URLSearchParams({
        ordering,
        daritanggal,
        ketanggal,
        bidang_usaha,
        prodi,
    });

    try {
        const [getProfile, getKontenLowongan, getDataFilter, getLowongan] =
            await Promise.all([
                fetchData("/client/profile"),
                fetchData("/client/konten"),
                fetchData("/client/data"),
                fetchData(`/client/lowongan?${qs}`),
            ]);
        return {
            props: {
                profile: getProfile,
                kontenLowongan: getKontenLowongan.konten,
                dataFilterLowongan: getDataFilter,
                dataLowongan: getLowongan,
            },
        };
    } catch (error) {
        return {
            props: {
                error: error.message,
                profile: null,
                kontenLowongan: null,
                dataFilterLowongan: null,
                dataLowongan: null,
            },
        };
    }
};

export default function Lowongan({
    profile,
    kontenLowongan,
    dataFilterLowongan,
    dataLowongan,
    error,
}) {
    return (
        <GuestLayout profile={profile} title="Lowongan Pekerjaan">
            <LowonganViews
                data={{
                    konten: kontenLowongan,
                    filterData: dataFilterLowongan,
                    dataLowongan: dataLowongan,
                }}
            ></LowonganViews>
        </GuestLayout>
    );
}
