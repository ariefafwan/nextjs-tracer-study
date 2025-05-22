import { GuestLayout } from "@/components/layouts/GuestLayout";
import { HomeViews } from "@/views/HomeViews";
import fetchData from "@/lib/fetchData";

export const getServerSideProps = async () => {
    try {
        const [getProfile, getKonten] = await Promise.all([
            fetchData("/client/profile"),
            fetchData("/client/konten"),
        ]);
        return {
            props: {
                profile: getProfile,
                konten: getKonten,
            },
        };
    } catch (error) {
        return {
            props: {
                error: error.message,
                profile: null,
                konten: null,
            },
        };
    }
};

export default function Home({ profile, error, konten }) {
    return (
        <GuestLayout profile={profile} title={profile.nama}>
            <HomeViews dataKonten={konten}></HomeViews>
        </GuestLayout>
    );
}
