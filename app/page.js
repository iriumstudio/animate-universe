"use client";

import { useRouter } from "next/navigation";

const portals = [
  {
    id: "irium",
    label: "iRium World",
    top: "13%",
    left: "4.5%",
    width: "31%",
    height: "34%",
    href: "/irium-world",
  },
  {
    id: "idol",
    label: "iDol World",
    top: "12%",
    left: "69.5%",
    width: "28%",
    height: "37%",
    href: "/idol-world",
  },
  {
    id: "novel",
    label: "Novel World",
    top: "56%",
    left: "8%",
    width: "30%",
    height: "28%",
    href: "/novel-world",
  },
  {
    id: "core",
    label: "AniMate Core",
    top: "33%",
    left: "36%",
    width: "27%",
    height: "50%",
    href: "/animate-core",
  },
  {
    id: "cafe",
    label: "AniMate Cafe",
    top: "56%",
    left: "57%",
    width: "34%",
    height: "28%",
    href: "/animate-cafe",
  },
];

export default function Home() {
  const router = useRouter();

  const handleClick = (portal) => {
    router.push(portal.href);

    // ถ้ายังไม่อยากให้ไปหน้าอื่นจริง ให้ใช้บรรทัดนี้แทน:
    // alert(`Entering ${portal.label}`);
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative w-full max-w-[1400px] aspect-[16/9]">
        <img
          src="/AniMateMainPage.png"
          alt="AniMate Universe Portal Room"
          className="w-full h-full object-contain select-none pointer-events-none"
          draggable="false"
        />

        {portals.map((portal) => (
          <button
            key={portal.id}
            type="button"
            aria-label={portal.label}
            title={portal.label}
            onClick={() => handleClick(portal)}
            className="absolute rounded-[999px] border border-white/20 bg-white/5 hover:bg-white/10 hover:border-cyan-300/70 focus:outline-none focus:ring-2 focus:ring-cyan-300/80 transition-all duration-200"
            style={{
              top: portal.top,
              left: portal.left,
              width: portal.width,
              height: portal.height,
            }}
          >
            <span className="sr-only">{portal.label}</span>
          </button>
        ))}
      </div>
    </main>
  );
}