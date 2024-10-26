import RootLayout from "@/app/layout";
import { UserAgent } from "@/views/userAgent";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const userAgent = req.headers["user-agent"] || "Unknown user agent";
    return { props: { userAgent } };
};

const UserAgentPage = ({ userAgent }: { userAgent: string }) => {
    return (
        <RootLayout userAgent={userAgent}>
            <UserAgent />
        </RootLayout>
    );
};

export default UserAgentPage;
