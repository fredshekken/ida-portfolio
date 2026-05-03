"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

export default function GithubHeatmap({ username = "fredshekken" }: { username?: string }) {
  const heatmapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToContributions = () => {
      const scroller = heatmapRef.current?.querySelector<HTMLElement>(
        ".react-activity-calendar__scroll-container"
      );

      if (scroller) {
        scroller.scrollLeft = scroller.scrollWidth;
      }
    };

    const timeoutId = window.setTimeout(scrollToContributions, 350);

    return () => window.clearTimeout(timeoutId);
  }, [username]);

  return (
    <div ref={heatmapRef} className="github-heatmap w-full overflow-hidden">
      <div className="p-4 rounded-2xl bg-white/8 border border-white/10 backdrop-blur-md">
        <GitHubCalendar
          username={username}
          blockSize={11}
          blockMargin={3}
          theme={{
            light: ["#ffffff", "#dffbf8", "#9ceee4", "#4fd4c7", "#1a8fa0"],
            dark: ["#ffffff", "#dffbf8", "#9ceee4", "#4fd4c7", "#1a8fa0"],
          }}
        />
      </div>
    </div>
  );
}
