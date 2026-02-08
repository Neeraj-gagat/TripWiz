// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useTamboThread } from "@tambo-ai/react";

// export function AutoRedirectToHotels() {
//   const { thread } = useTamboThread();
//   const router = useRouter();

//   useEffect(() => {
//     if (!thread?.messages?.length) return;

//     const hasHotelResults = thread.messages.some(
//       (m) =>
//         m.role === "assistant" &&
//         m.content?.[0]?.type === "text" &&
//         m.content[0].text?.includes('"results"')
//     );

//     if (hasHotelResults) {
//       router.push("/hotels");
//     }
//   }, [thread, router]);

//   return null;
// }

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTamboThread } from "@tambo-ai/react";

export function AutoRedirectToHotels() {
  const { thread } = useTamboThread();
  const router = useRouter();

  useEffect(() => {
    if (!thread?.messages?.length) return;

    const hasHotelResults = thread.messages.some((m) => {
      if (m.role !== "tool") return false;

      // Tool output is stored directly on content
      const content = m.content as any;
      return Array.isArray(content?.results) && content.results.length > 0;
    });

    if (hasHotelResults) {
      router.push("/hotels");
    }
  }, [thread, router]);

  return null;
}

