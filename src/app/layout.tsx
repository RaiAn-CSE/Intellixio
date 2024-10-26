import { UserAgentProvider } from "../components/providers/userAgentProvider";
import "./globals.css";
import { Layout } from "@/components/layout";

const RootLayout: React.FC<{ children: React.ReactNode; userAgent?: string }> = ({ children, userAgent }) => {
  return (
    <html lang="en">
      <body>
        <UserAgentProvider userAgent={userAgent}>
          <Layout>{children}</Layout>
        </UserAgentProvider>

        {/* Add <noscript> fallback */}
        <noscript>
          <div className="flex font-mono font-semibold text-sm">
            <div className="border p-2">UserAgent</div>
            <div className="border p-2">{userAgent || "JavaScript is disabled, cannot fetch UserAgent"}</div>
          </div>
        </noscript>
      </body>
    </html>
  );
};

export default RootLayout;
