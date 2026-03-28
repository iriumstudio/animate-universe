"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const VOTE_GUIDE_PATH = "/idol-world/vote-guide";
const OPENING_MV_URL = "https://youtu.be/SJbFWSCn4E0";
const LINE_OA_URL = "https://lin.ee/OqESh9o";

const trainees = [
  {
    id: 1,
    name: "【AMTI#001】อาซาฮิ เรนะ",
    img: "/amti1.png",
    fbLink: "https://www.facebook.com/media/set/?set=a.122107812645254927",
    ytLink: "https://youtube.com/shorts/eM3RXETUF0c",
  },
  {
    id: 2,
    name: "【AMTI#002】อามาเทรุ ฮิบานะ",
    img: "/amti2.png",
    fbLink: "https://www.facebook.com/media/set/?set=a.122107829925254927",
    ytLink: "https://youtube.com/shorts/LDbZD9ABYDk",
  },
  {
    id: 3,
    name: "【AMTI#003】คางามิ ฟีร่า",
    img: "/amti3.png",
    fbLink: "https://www.facebook.com/media/set/?set=a.122107823991254927",
    ytLink: "https://youtube.com/shorts/Bzp_pV6Kqp4",
  },
  {
    id: 4,
    name: "【AMTI#004】โฮชิคาวะ เนมิ",
    img: "/amti4.png",
    fbLink: "https://facebook.com/media/set/?set=a.122107830735254927",
    ytLink: "https://youtube.com/shorts/_XySD9SIAHg",
  },
  {
    id: 5,
    name: "【AMTI#005】นานาเสะ โมโมะ",
    img: "/amti5.png",
    fbLink: "https://facebook.com/media/set/?set=a.122107831557254927",
    ytLink: "https://youtube.com/shorts/CCQJWwmiNnw",
  },
  {
    id: 6,
    name: "【AMTI#006】ยูคิฮาระ คริสต้า",
    img: "/amti6.png",
    fbLink: "https://facebook.com/media/set/?set=a.122107832475254927",
    ytLink: "https://youtube.com/shorts/pO_NcsOIdi4",
  },
  {
    id: 7,
    name: "【AMTI#007】อามะซากิ มิคิริ",
    img: "/amti7.png",
    fbLink: "https://facebook.com/media/set/?set=a.122107836477254927",
    ytLink: "https://youtube.com/shorts/Bk0lFmr50x4",
  },
  {
    id: 8,
    name: "【AMTI#008】อาเมโนะ เซราฟีน",
    img: "/amti8.png",
    fbLink: "https://facebook.com/media/set/?set=a.122107838643254927",
    ytLink: "https://youtube.com/shorts/LRHaiHzWSHg",
  },
  {
    id: 9,
    name: "【AMTI#009】โฮเซ็นกะ คาเอเดะ",
    img: "/amti9.png",
    fbLink: "https://facebook.com/media/set/?set=a.122107840929254927",
    ytLink: "https://youtube.com/shorts/G2385_WcV-o",
  },
  {
    id: 10,
    name: "【AMTI#010】ชิรายูกิ เรมิลา",
    img: "/amti10.png",
    fbLink: "https://facebook.com/media/set/?set=a.122107849449254927",
    ytLink: "https://youtube.com/shorts/gKgEgh-SqGw",
  },
  {
    id: 11,
    name: "【AMTI#011】ชิรานามิ มายูริ",
    img: "/amti11.png",
    fbLink: "https://facebook.com/media/set/?set=a.122107849953254927",
    ytLink: "https://youtube.com/shorts/_-kAzdobTkc",
  },
  {
    id: 12,
    name: "【AMTI#012】ไอซาวะ โนเอล",
    img: "/amti12.png",
    fbLink: "https://facebook.com/media/set/?set=a.122107857303254927",
    ytLink: "https://youtube.com/shorts/YXDKoASNlCA",
  },
  {
    id: 13,
    name: "【AMTI#013】ฮินาตะ อาการิ",
    img: "/amti13.png",
    fbLink: "https://facebook.com/media/set/?set=a.122107857849254927",
    ytLink: "https://youtube.com/shorts/Z3Ls0EaRrWA",
  },
  {
    id: 14,
    name: "【AMTI#014】เอลาเรีย ริริกะ",
    img: "/amti14.png",
    fbLink: "https://facebook.com/media/set/?set=a.122107858677254927",
    ytLink: "https://youtube.com/shorts/_swIt9It8Wo",
  },
  {
    id: 15,
    name: "【AMTI#015】ชิรามิเนะ ไอริ",
    img: "/amti15.png",
    fbLink: "https://facebook.com/media/set/?set=a.122107859187254927",
    ytLink: "https://youtube.com/shorts/P_GaHP6SvNA",
  },
  {
    id: 16,
    name: "【AMTI#016】ดราโคริส ลิเรีย",
    img: "/amti16.png",
    fbLink: "https://facebook.com/media/set/?set=a.122107860363254927",
    ytLink: "https://youtube.com/shorts/k3odeI88Bes",
  },
  {
    id: 17,
    name: "【AMTI#017】ซาโตะ ชิโอริ",
    img: "/amti17.png",
    fbLink: "https://facebook.com/media/set/?set=a.122107861071254927",
    ytLink: "https://youtube.com/shorts/qAGPiQ1xvnM",
  },
  {
    id: 18,
    name: "【AMTI#018】อลิสา ดาราวลิน",
    img: "/amti18.png",
    fbLink: "https://facebook.com/media/set/?set=a.122107864527254927",
    ytLink: "https://youtube.com/shorts/n3i3K5dvnbk",
  },
  {
    id: 19,
    name: "【AMTI#019】สเตลล่า นัวเรต์",
    img: "/amti19.png",
    fbLink: "https://facebook.com/media/set/?set=a.122107903797254927",
    ytLink: "https://youtube.com/shorts/htQkSwSuzMo",
  },
  {
    id: 20,
    name: "【AMTI#020】อิกนิส เฟลิน่า",
    img: "/amti20.png",
    fbLink: "https://facebook.com/media/set/?set=a.122107901733254927",
    ytLink: "https://youtube.com/shorts/btVSAbsSP_M",
  },
];

const coreMembers = [
  {
    name: "ANIX",
    subtitle: "KEMONOMIMI IDOL BAND",
    img: "/anix.jpg",
    fbLink: "https://facebook.com/ANIX",
    ytLink: "https://www.youtube.com/playlist?list=PLpDZkAX_z_42Id4PQvrvfijhaRJ5vAdOq",
  },
  {
    name: "Hankō",
    subtitle: "NEO-MATSURI POP DUO",
    img: "/hanko.jpg",
    fbLink: "https://facebook.com/Hanko",
    ytLink: "https://youtu.be/3jljRzE7cLo",
  },
  {
    name: "Oni3 : Crimson Kagura",
    subtitle: "FESTIVAL BATTLE UNIT",
    img: "/oni3.jpg",
    fbLink: "https://facebook.com/Oni3",
    ytLink: "https://youtu.be/kA0Gw8qefPU",
  },
  {
    name: "Zister",
    subtitle: "LITTLE SISTER IDOL UNIT",
    img: "/zister.jpg",
    fbLink: "https://facebook.com/Zister",
    ytLink: "https://youtu.be/uRK_kowvZpU",
  },
];

const itemsPerPage = 4;

export default function IdolWorldPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.ceil(trainees.length / itemsPerPage);

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return trainees.slice(start, start + itemsPerPage);
  }, [currentPage]);

  const openNewTab = (url) => {
    if (!url || url === "#") return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#060912] text-white">
      <header className="fixed top-0 z-50 flex h-[60px] w-full items-center justify-between border-b border-white/10 bg-[rgba(6,9,18,0.95)] px-8 backdrop-blur-sm">
        <div className="text-2xl font-black tracking-wide text-[#00d2ff]">
          ANI-MATE UNIVERSE
        </div>
        <div className="text-sm font-semibold tracking-[0.18em] text-[#00d2ff]">
          IDOL WORLD
        </div>
      </header>

      <div className="relative mt-[60px] flex min-h-[calc(100vh-60px)] flex-col lg:flex-row">
        <div className="absolute bottom-0 left-1/2 top-0 hidden w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#ffcc00] via-[#ff00cc] to-[#00d2ff] lg:block" />

        {/* LEFT PANEL */}
        <section className="w-full p-8 lg:w-1/2">
          <div className="mb-7 rounded-3xl border border-[#f1c40f]/20 bg-[radial-gradient(circle_at_top,rgba(241,196,15,0.10),rgba(241,196,15,0.03)_35%,rgba(255,255,255,0.015))] p-6 shadow-[0_0_24px_rgba(241,196,15,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f1c40f]/65">
              Debuted Units
            </p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-[0.04em] text-[#f7d55b]">
              Core Members
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/60">
              วงไอดอลหลักที่ผ่านการเดบิวต์แล้ว พร้อมผลงานและคาแรกเตอร์ประจำจักรวาล AniMate
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2">
            {coreMembers.map((item) => (
              <div
                key={item.name}
                onClick={() => openNewTab(item.fbLink)}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#f1c40f]/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(241,196,15,0.25)]"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="mb-3 aspect-[16/10] w-full rounded-xl object-cover object-center"
                />

                <div className="flex items-end justify-between gap-3 px-1 pt-1">
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-black tracking-[0.03em] text-[#f7d55b]">
                      {item.name}
                    </h3>
                    <p className="mt-1 truncate text-[10px] uppercase tracking-[0.22em] text-white/40">
                      {item.subtitle}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openNewTab(item.ytLink);
                    }}
                    className="shrink-0 rounded-xl border border-[#f1c40f]/40 bg-[#f1c40f] px-3 py-2 text-[11px] font-black tracking-wide text-black shadow-[0_0_8px_rgba(241,196,15,0.35)] transition hover:scale-105 hover:shadow-[0_0_14px_rgba(241,196,15,0.55)]"
                  >
                    ▶ WATCH
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RIGHT PANEL */}
        <section className="flex w-full flex-col items-center p-8 lg:w-1/2">
          <div className="mb-6 w-full rounded-3xl border border-[#ff00cc]/25 bg-[radial-gradient(circle_at_top,rgba(255,0,204,0.16),rgba(255,0,204,0.03)_35%,rgba(255,255,255,0.02))] p-6 shadow-[0_0_30px_rgba(255,0,204,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ff74de]/70">
              Competition Stage
            </p>

            <h1 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">
              <span className="bg-gradient-to-r from-[#ff7ae5] via-white to-[#ff00cc] bg-clip-text text-transparent">
                AniMate Trainee iDol League
              </span>
              <span className="mt-2 block text-2xl text-[#ff7ae5] md:text-3xl">
                Season 1
              </span>
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
              เวทีรวมผู้เข้าแข่งขัน 20 คน กด Add LINE เพื่อรับข่าวสารวันเปิดโหวต
              และอัปเดตกิจกรรมสำคัญก่อนใคร
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={VOTE_GUIDE_PATH}
                className="rounded-2xl border border-[#ff7ae5]/40 bg-[#ff00cc]/15 px-5 py-3 text-sm font-black tracking-wide text-[#ffd0f5] transition hover:-translate-y-0.5 hover:bg-[#ff00cc]/25 hover:shadow-[0_0_16px_rgba(255,0,204,0.3)]"
              >
                🗳️ วิธีโหวต
              </Link>

              <a
                href={OPENING_MV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-cyan-300/35 bg-cyan-400/10 px-5 py-3 text-sm font-black tracking-wide text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-400/20 hover:shadow-[0_0_16px_rgba(34,211,238,0.22)]"
              >
                ▶ MV เพลงเปิด
              </a>

              <a
                href={LINE_OA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[#7CFC00]/35 bg-[#7CFC00]/10 px-5 py-3 text-sm font-black tracking-wide text-[#d9ffb3] transition hover:-translate-y-0.5 hover:bg-[#7CFC00]/20 hover:shadow-[0_0_16px_rgba(124,252,0,0.22)]"
              >
                💬 Add LINE
              </a>
            </div>
          </div>

          <div className="mb-5 w-full">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="m-0 text-xl font-black uppercase tracking-wide text-[#ff00cc]">
                  Idol League
                </h2>
                <p className="mt-1 text-sm text-white/60">
                  Project 20 Trainees · Season 1
                </p>
              </div>
              <p className="hidden text-xs uppercase tracking-[0.25em] text-[#ff7ae5]/50 md:block">
                Current Round
              </p>
            </div>
          </div>

          <div className="grid w-full flex-grow grid-cols-1 gap-4 sm:grid-cols-2">
            {currentData.map((t) => (
              <div
                key={t.id}
                onClick={() => openNewTab(t.fbLink)}
                className="group flex cursor-pointer flex-col justify-between rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-2.5 transition duration-300 hover:-translate-y-1 hover:border-[#ff00cc] hover:shadow-[0_8px_20px_rgba(255,0,204,0.14)]"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="mb-2.5 aspect-video w-full rounded-xl bg-[#1a1a2e] object-cover"
                />

                <div className="flex items-center justify-between gap-3 px-1">
                  <span className="line-clamp-2 text-sm font-bold leading-6 text-white">
                    {t.name}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openNewTab(t.ytLink);
                    }}
                    className="shrink-0 rounded-xl bg-[#ff00cc] px-3 py-2 text-[11px] font-black tracking-wide text-black shadow-[0_0_8px_rgba(255,0,204,0.35)] transition hover:scale-105 hover:shadow-[0_0_14px_rgba(255,0,204,0.55)]"
                  >
                    ▶ WATCH
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-2">
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`flex h-[40px] w-[40px] items-center justify-center rounded-full border text-sm font-black transition ${
                  page === currentPage
                    ? "border-[#ff00cc] bg-[#ff00cc] text-black shadow-[0_0_12px_#ff00cc]"
                    : "border-white/10 bg-white/5 text-white hover:border-[#ff00cc]/40 hover:text-[#ffd0f5]"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}