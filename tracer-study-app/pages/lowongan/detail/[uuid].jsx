import { GuestLayout } from "@/components/layouts/GuestLayout";
import fetchData from "@/lib/fetchData";
import { DetailLowonganViews } from "@/views/DetailLowonganViews";

export const getServerSideProps = async (context) => {
    const slug = context.params;
    try {
        const [getProfile, getDataLowongan] = await Promise.all([
            fetchData("/client/profile"),
            fetchData(`/client/detail_lowongan/${slug.uuid}`),
        ]);
        return {
            props: {
                profile: getProfile,
                data: getDataLowongan,
            },
        };
    } catch (error) {
        return {
            props: {
                error: error.message,
                profile: null,
                data: null,
            },
        };
    }
};

export default function DetailLowonganPage({ profile, data }) {
    return (
        <GuestLayout profile={profile} title="Detail Lowongan">
            <DetailLowonganViews data={data}></DetailLowonganViews>
        </GuestLayout>
    );
}
