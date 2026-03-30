"use client";

import Link from "next/link";

const PORTAL_PATH = "/";
const IRIUM_WORLD_PATH = "/irium-world";
const NOVEL_WORLD_PATH = "/novel-world";
const IDOL_WORLD_PATH = "/idol-world";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/channel/UC4ot8wsooHevmjgmskP_LEA";
const FACEBOOK_PAGE_URL = "https://www.facebook.com/AniMateCafe/";
const OPENING_MV_URL = "https://youtu.be/aQ_SWk-1L0A";

const NOVEL_TITLE = "เจ็ดบทเพลงแห่งคำสาบาน";

const topNavItems = [
  { label: "Portal", href: PORTAL_PATH },
  { label: "iRium World", href: IRIUM_WORLD_PATH },
  { label: "Novel World", href: NOVEL_WORLD_PATH, active: true },
  { label: "iDol World", href: IDOL_WORLD_PATH },
];

export default function NovelPage() {
  return (
    <main className="min-h-screen bg-[#060912] text-white">

      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[rgba(6,9,18,0.95)] backdrop-blur-sm">
        <div className="flex min-h-[60px] w-full items-center justify-between px-5 md:px-8">
          <Link href={PORTAL_PATH} className="text-xl font-black text-[#00d2ff] md:text-2xl">
            ANI-MATE UNIVERSE
          </Link>

          <div className="hidden text-sm font-semibold tracking-[0.18em] text-[#00d2ff] xl:block">
            NOVEL WORLD
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-t border-white/5 px-5 py-3 md:px-8">
          {topNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.2em] ${
                item.active
                  ? "border-[#00d2ff]/45 bg-[#00d2ff]/12 text-[#8aeaff]"
                  : "border-white/10 text-white/70 hover:bg-[#00d2ff]/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </header>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-6 pt-[130px] pb-16">

        {/* TITLE + PROLOG */}
        <section className="mb-10 rounded-3xl border border-cyan-300/15 bg-white/[0.03] p-6 md:p-8">

          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#00d2ff] to-[#ff7ae5] bg-clip-text text-transparent">
            {NOVEL_TITLE}
          </h1>

          <p className="mt-6 text-lg text-white/80 leading-8">
            “เจ็ดบทเพลง… เจ็ดคำสาบาน…  
            และหนึ่งชะตากรรมที่ไม่มีใครหลีกหนีได้”
          </p>

          <p className="mt-6 text-white/70 leading-8">
            เมื่อชายหนุ่มผู้มีสายเลือดปริศนา หลุดเข้าสู่ดินแดนต้องห้าม  
            เขากลับถูกผูกด้วยคำมั่นที่ไม่อาจปฎิเสธได้ กับปรามาจารย์สาวทั้งเจ็ดแห่งสำนักยุทธดนตรี  
            ผู้ซึ่งแต่ละคน ต่างมี “บทเพลง” ของตนเอง
          </p>

          <p className="mt-4 text-white/70 leading-8">
            บทเพลงที่เกิดจากความแค้น…  
            บทเพลงที่ถูกสร้างขึ้นเพื่อปกป้อง…  
            และบทเพลง…ที่ไม่เคยถูกขับขานจนถึงวันที่เขาจากไป
          </p>

          <p className="mt-4 text-white/70 leading-8">
            นี่คือเรื่องราวของบทเพลงและคำสาบาน  
            ที่ไม่ได้ถูกเขียนไว้ในกระดาษ…  
            แต่ถูกบรรเลงไว้ในหัวใจของพวกเธอ
          </p>

        </section>

        {/* MV */}
        <section className="mb-10 rounded-3xl border border-pink-300/20 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-bold text-pink-300 mb-4">
            🎼 บทเพลงที่ 1 : คำสาบานใต้พิณ
          </h2>

          <a
            href={OPENING_MV_URL}
            target="_blank"
            className="block rounded-xl border border-white/10 overflow-hidden"
          >
            <img
              src="/novel-opening-mv.png"
              alt="คำสาบานใต้พิณ"
              className="w-full aspect-video object-cover"
            />
          </a>
        </section>

        {/* LAUNCH */}
        <section className="mb-10 rounded-3xl border border-yellow-300/20 bg-yellow-300/5 p-6">
          <h2 className="text-2xl font-bold text-yellow-200">
            📢 เปิดตัว พฤษภาคมนี้
          </h2>

          <p className="mt-4 text-yellow-100/80 leading-8">
            โปรดติดตามผ่านหน้าเว็บ Ani-Mate Universe หรือช่องทางด้านล่าง
          </p>

          <div className="mt-5 flex gap-3 flex-wrap">
            <a href={YOUTUBE_CHANNEL_URL} target="_blank" className="px-4 py-2 bg-red-500 rounded-xl font-bold">
              YouTube
            </a>

            <a href={FACEBOOK_PAGE_URL} target="_blank" className="px-4 py-2 bg-blue-500 rounded-xl font-bold">
              Facebook
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}