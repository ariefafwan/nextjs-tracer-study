import { GuestLayout } from "@/components/layouts/GuestLayout";
import { KuisionerViews } from "@/views/KuisionerViews";
import fetchData from "@/lib/fetchData";

export const getServerSideProps = async () => {
    try {
        const [getProfile, getProgramStudi, getPertanyaan] = await Promise.all([
            fetchData("/client/profile"),
            fetchData("/client/programstudi"),
            fetchData("/client/pertanyaan"),
        ]);
        return {
            props: {
                profile: getProfile,
                programStudi: getProgramStudi,
                pertanyaan: getPertanyaan,
            },
        };
    } catch (error) {
        return {
            props: {
                error: error.message,
                profile: null,
                programStudi: null,
                pertanyaan: null,
            },
        };
    }
};
export default function KuisionerPage({
    profile,
    programStudi,
    pertanyaan,
    error,
}) {
    return (
        <GuestLayout profile={profile} title="Isi Kuisioner">
            <KuisionerViews
                data={{
                    programStudi: programStudi,
                    pertanyaan: pertanyaan,
                }}
            ></KuisionerViews>
        </GuestLayout>
    );
}
