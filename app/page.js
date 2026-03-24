"use client";

import { motion } from "framer-motion";

const portalPoints = [
  { id: "p1", x: "20%", y: "30%", label: "Portal 1" },
  { id: "p2", x: "55%", y: "40%", label: "Portal 2" },
  { id: "p3", x: "70%", y: "68%", label: "Portal 3" },
];

export default function Home() {
  const handlePortalClick = (label) => {
    alert(`${label} ถูกกด!`);
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/AniMateMainPage.png')" }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-14 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-black md:text-6xl"
        >
          AniMate Universe
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 max-w-2xl text-sm md:text-lg text-slate-200"
        >
          เดินทางข้ามมิติในโลกอะนิเมะด้วยพอร์ทัลล่องหน เปิดปฏิบัติการสร้างคอนเทนต์ของคุณได้ทันที.
        </motion.p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {portalPoints.map((portal) => (
            <motion.button
              key={portal.id}
              onClick={() => handlePortalClick(portal.label)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-emerald-300/60 bg-emerald-500/20 px-4 py-2 text-xs text-emerald-100 transition-opacity duration-300 hover:bg-emerald-400/30"
            >
              {portal.label}
            </motion.button>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0">
          {portalPoints.map((portal) => (
            <motion.div
              key={portal.id}
              className="portal absolute"
              initial={{ opacity: 0.1, scale: 0.9 }}
              animate={{ opacity: 0.28, scale: 1 }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }}
              style={{ left: portal.x, top: portal.y, transform: "translate(-50%, -50%)" }}
            >
              <div id="portal-overlay" title={portal.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
