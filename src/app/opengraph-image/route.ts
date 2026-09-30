import { createElement } from "react";
import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    createElement("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", background: "linear-gradient(135deg, #f5f8fc 0%, #e3effb 100%)", color: "#102238", fontFamily: "Arial, sans-serif" } },
      createElement("div", { style: { display: "flex", alignItems: "center", gap: "18px", color: "#0759b8", fontSize: 28, fontWeight: 700 } },
        createElement("span", { style: { width: 22, height: 22, borderRadius: 6, background: "#0759b8" } }), "APEX AIRCARE"),
      createElement("div", { style: { display: "flex", flexDirection: "column", gap: "22px" } },
        createElement("div", { style: { fontSize: 68, fontWeight: 700, letterSpacing: "-2px" } }, "Cooler Homes. Happier Days."),
        createElement("div", { style: { fontSize: 30, color: "#405872" } }, "A fictional aircon service concept")),
      createElement("div", { style: { display: "flex", alignSelf: "flex-start", padding: "14px 22px", borderRadius: 999, background: "#082846", color: "white", fontSize: 22 } }, "PORTFOLIO DEMONSTRATION · NOT A LIVE BUSINESS")),
    { width: 1200, height: 630 },
  );
}
