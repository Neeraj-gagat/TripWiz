"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTamboThread } from "@tambo-ai/react";
import { useHotelStore } from "@/lib/store/useHotelStore";

export function AutoRedirectToHotels() {
  const { thread } = useTamboThread();
  const router = useRouter();

  const {
    setResults,
    hasRedirected,
    setHasRedirected,
  } = useHotelStore();

  // 🔹 Track last processed tool message to avoid reusing old data
  const lastToolMessageId = useRef<string | null>(null);

  useEffect(() => {
    if (!thread?.messages?.length) return;

    const messages = thread.messages;
    const lastMessage = messages[messages.length - 1];

    // 🔹 1. New user intent → allow redirect again
    if (lastMessage.role === "user") {
      setHasRedirected(false);
    }

    // 🔹 2. Find the LATEST tool message
    const toolMessage = [...messages]
      .reverse()
      .find((m) => m.role === "tool");

    if (!toolMessage) return;

    // 🔹 Prevent reprocessing the same tool output
    if (toolMessage.id === lastToolMessageId.current) return;

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

    // ✅ Update store with NEW results
    setResults(parsed.results, parsed.meta);
    lastToolMessageId.current = toolMessage.id;

    // 🔹 3. Redirect only once per tool execution
    if (!hasRedirected) {
      setHasRedirected(true);
      router.push("/hotels");
    }
  }, [
    thread,
    hasRedirected,
    setResults,
    setHasRedirected,
    router,
  ]);

  return null;
}

