"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTamboThread } from "@tambo-ai/react";
import { useHotelStore } from "@/lib/store/useHotelStore";

export function AutoRedirectToHotels() {
  const { thread } = useTamboThread();
  const router = useRouter();
  const setResults = useHotelStore((s) => s.setResults);
  const redirected = useRef(false);

  useEffect(() => {
    if (!thread?.messages?.length || redirected.current) return;

    const toolMessage = [...thread.messages]
      .reverse()
      .find((m) => m.role === "tool");

    if (!toolMessage) return;

    // ✅ TOOL CONTENT IS TEXT, NOT OBJECT
    const toolText =
      Array.isArray(toolMessage.content) &&
      toolMessage.content[0]?.type === "text"
        ? toolMessage.content[0].text
        : null;

    if (!toolText) return;

    let parsed;
    try {
      parsed = JSON.parse(toolText);
    } catch {
      return;
    }

    if (!Array.isArray(parsed?.results) || !parsed?.meta) return;

    // ✅ STORE RESULTS + META
    setResults(parsed.results, parsed.meta);

    redirected.current = true;
    router.push("/hotels");
  }, [thread, router, setResults]);

  return null;
}


//2 approch
// "use client";

// import { useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { useTamboThread } from "@tambo-ai/react";
// import { useHotelStore } from "@/lib/store/useHotelStore";

// export function AutoRedirectToHotels() {
//   const { thread } = useTamboThread();
//   const router = useRouter();
//   const setResults = useHotelStore((s) => s.setResults);
//   const redirected = useRef(false);

//   useEffect(() => {
//     if (!thread?.messages?.length || redirected.current) return;

//     // 1️⃣ Assistant message (natural language)
//     const assistantMessage = [...thread.messages]
//       .reverse()
//       .find(
//         (m) =>
//           m.role === "assistant" &&
//           m.content?.[0]?.type === "text"
//       );

//     if (!assistantMessage) return;

//     // 2️⃣ Tool message (structured results)
//     const toolMessage = [...thread.messages]
//       .reverse()
//       .find((m) => m.role === "tool");

//     if (!toolMessage) return;

//     // 3️⃣ Extract JSON text from tool
//     const toolText =
//       Array.isArray(toolMessage.content) &&
//       toolMessage.content[0]?.type === "text"
//         ? toolMessage.content[0].text
//         : null;

//     if (!toolText) return;

//     let parsed: any;
//     try {
//       parsed = JSON.parse(toolText);
//     } catch {
//       return;
//     }

//     if (!Array.isArray(parsed.results)) return;

//     // 4️⃣ Extract city + dates from assistant text
//     const assistantText = assistantMessage.content[0].text ?? "";

//     const cityMatch = assistantText.match(/in ([A-Za-z\s]+)/i);
//     const city = cityMatch?.[1]?.trim() ?? "Unknown location";

//     const dateMatch = assistantText.match(
//       /(\w+\s\d{1,2}).*?(\w+\s\d{1,2})/i
//     );

//     const checkInDate = dateMatch?.[1] ?? "";
//     const checkOutDate = dateMatch?.[2] ?? "";

//     // 5️⃣ Store results + meta
//     setResults(parsed.results, {
//       city,
//       checkInDate,
//       checkOutDate,
//     });

//     redirected.current = true;
//     router.push("/hotels");
//   }, [thread, router, setResults]);

//   return null;
// }

