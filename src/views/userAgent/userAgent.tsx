"use client";

import { BackToHome } from "@/components/backToHome/backToHome";
import { useUserAgentContext } from "@/components/providers/userAgentProvider";

export const UserAgent = () => {
  const { userAgent } = useUserAgentContext();

  console.log("userAgent", userAgent);

  return (
    <div>
      <BackToHome />

      {/* Content displayed if JavaScript is enabled */}
      {userAgent && (
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>
          <div className="border p-2">{userAgent}</div>
        </div>
      )}

      {!userAgent && <div>No user agent</div>}

      {/* Fallback content when JavaScript is disabled */}
      <noscript>
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>
          <div className="border p-2">JavaScript is disabled, unable to fetch UserAgent</div>
        </div>
      </noscript>
    </div>
  );
};
