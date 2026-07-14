import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/portal.html");
  }, []);
  return (
    <div style={{ minHeight: "100dvh", display: "grid", placeItems: "center", background: "#FFF8F2" }}>
      <p style={{ fontFamily: "system-ui, sans-serif", color: "#FF7A00" }}>Loading RSS Jigani…</p>
    </div>
  );
}
