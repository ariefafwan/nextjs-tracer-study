import { GuestLayout } from "@/components/layouts/GuestLayout";
import fetchData from "@/lib/fetchData";
import { FaqViews } from "@/views/FaqViews";

export const getServerSideProps = async () => {
    try {
        const [getProfile, getFaq] = await Promise.all([
            fetchData("/client/profile"),
            fetchData("/client/konten"),
        ]);
        return {
            props: {
                profile: getProfile,
                kontenFaq: getFaq,
            },
        };
    } catch (error) {
        return {
            props: {
                error: error.message,
                profile: null,
                kontenFaq: null,
            },
        };
    }
};

export default function FaqPage({ profile, kontenFaq, error }) {
    return (
        <GuestLayout profile={profile} title="Faq">
            <FaqViews dataFaq={kontenFaq}></FaqViews>
        </GuestLayout>
    );
}
