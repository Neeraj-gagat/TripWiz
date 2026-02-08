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
//         m.role === "tool" &&
//         typeof m.content === "object" &&
//         Array.isArray(m.content) &&
//         m.content[0]?.text?.includes('"results"')
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
import { useHotelStore } from "@/lib/store/useHotelStore";

export function AutoRedirectToHotels() {
  const { thread } = useTamboThread();
  const router = useRouter();
  const setHotels = useHotelStore((s) => s.setHotels);

  useEffect(() => {
    if (!thread?.messages?.length) return;

    const toolMessage = thread.messages.find(
      (m) =>
        m.role === "tool" &&
        typeof m.content === "object" &&
        Array.isArray(m.content) &&
        m.content[0]?.text?.includes('"results"')
    );

    if (!toolMessage) return;

    try {
      const contentText = Array.isArray(toolMessage.content)
        ? toolMessage.content[0]?.text
        : toolMessage.content;

      if (!contentText) return;

      const parsed = JSON.parse(contentText);

      if (Array.isArray(parsed.results)) {
        // ✅ THIS WAS MISSING
        setHotels(parsed.results);

        // ✅ Redirect still works
        router.push("/hotels");
      }
    } catch (e) {
      console.error("Failed to parse hotel results", e);
    }
  }, [thread, router, setHotels]);

  return null;
}
