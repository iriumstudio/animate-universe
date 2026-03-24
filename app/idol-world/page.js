"use client";

import { useMemo, useState } from "react";

const trainees = [
  { id: 1, name: "【AMTI#001】อาซาฮิ เรนะ", img: "/amti1.png", fbLink: "https://www.facebook.com/media/set/?set=a.122107812645254927", ytLink: "https://youtube.com/shorts/eM3RXETUF0c" },
  { id: 2, name: "【AMTI#002】อามาเทรุ ฮิบานะ", img: "/amti2.png", fbLink: "https://www.facebook.com/media/set/?set=a.122107829925254927", ytLink: "https://youtube.com/shorts/LDbZD9ABYDk" },
  { id: 3, name: "【AMTI#003】คางามิ ฟีร่า", img: "/amti3.png", fbLink: "https://www.facebook.com/media/set/?set=a.122107823991254927", ytLink: "https://youtube.com/shorts/Bzp_pV6Kqp4" },
  { id: 4, name: "【AMTI#004】โฮชิคาวะ เนมิ", img: "/amti4.png", fbLink: "https://facebook.com/media/set/?set=a.122107830735254927", ytLink: "https://youtube.com/shorts/_XySD9SIAHg" },
  { id: 5, name: "【AMTI#005】นานาเสะ โมโมะ", img: "/amti5.png", fbLink: "https://facebook.com/media/set/?set=a.122107831557254927", ytLink: "https://youtube.com/shorts/CCQJWwmiNnw" },
  { id: 6, name: "【AMTI#006】ยูคิฮาระ คริสต้า", img: "/amti6.png", fbLink: "https://facebook.com/media/set/?set=a.122107832475254927", ytLink: "https://youtube.com/shorts/pO_NcsOIdi4" },
  { id: 7, name: "【AMTI#007】อามะซากิ มิคิริ", img: "/amti7.png", fbLink: "https://facebook.com/media/set/?set=a.122107836477254927", ytLink: "https://youtube.com/shorts/Bk0lFmr50x4" },
  { id: 8, name: "【AMTI#008】อาเมโนะ เซราฟีน", img: "/amti8.png", fbLink: "https://facebook.com/media/set/?set=a.122107838643254927", ytLink: "https://youtube.com/shorts/LRHaiHzWSHg" },
  { id: 9, name: "【AMTI#009】โฮเซ็นกะ คาเอเดะ", img: "/amti9.png", fbLink: "https://facebook.com/media/set/?set=a.122107840929254927", ytLink: "https://youtube.com/shorts/G2385_WcV-o" },
  { id: 10, name: "【AMTI#010】ชิรายูกิ เรมิลา", img: "/amti10.png", fbLink: "https://facebook.com/media/set/?set=a.122107849449254927", ytLink: "https://youtube.com/shorts/gKgEgh-SqGw" },
  { id: 11, name: "【AMTI#011】ชิรานามิ มายูริ", img: "/amti11.png", fbLink: "https://facebook.com/media/set/?set=a.122107849953254927", ytLink: "https://youtube.com/shorts/_-kAzdobTkc" },
  { id: 12, name: "【AMTI#012】ไอซาวะ โนเอล", img: "/amti12.png", fbLink: "https://facebook.com/media/set/?set=a.122107857303254927", ytLink: "https://youtube.com/shorts/YXDKoASNlCA" },
  { id: 13, name: "【AMTI#013】ฮินาตะ อาการิ", img: "/amti13.png", fbLink: "https://facebook.com/media/set/?set=a.122107857849254927", ytLink: "https://youtube.com/shorts/Z3Ls0EaRrWA" },
  { id: 14, name: "【AMTI#014】เอลาเรีย ริริกะ", img: "/amti14.png", fbLink: "https://facebook.com/media/set/?set=a.122107858677254927", ytLink: "https://youtube.com/shorts/_swIt9It8Wo" },
  { id: 15, name: "【AMTI#015】ชิรามิเนะ ไอริ", img: "/amti15.png", fbLink: "https://facebook.com/media/set/?set=a.122107859187254927", ytLink: "https://youtube.com/shorts/P_GaHP6SvNA" },
  { id: 16, name: "【AMTI#016】ดราโคริส ลิเรีย", img: "/amti16.png", fbLink: "https://facebook.com/media/set/?set=a.122107860363254927", ytLink: "https://youtube.com/shorts/k3odeI88Bes" },
  { id: 17, name: "【AMTI#017】ซาโตะ ชิโอริ", img: "/amti17.png", fbLink: "https://facebook.com/media/set/?set=a.122107861071254927", ytLink: "https://youtube.com/shorts/qAGPiQ1xvnM" },
  { id: 18, name: "【AMTI#018】อลิสา ดาราวลิน", img: "/amti18.png", fbLink: "https://facebook.com/media/set/?set=a.122107864527254927", ytLink: "https://youtube.com/shorts/n3i3K5dvnbk" },
  { id: 19, name: "【AMTI#019】สเตลล่า นัวเรต์", img: "/amti19.png", fbLink: "https://facebook.com/media/set/?set=a.122107903797254927", ytLink: "https://youtube.com/shorts/htQkSwSuzMo" },
  { id: 20, name: "【AMTI#020】อิกนิส เฟลิน่า", img: "/amti20.png", fbLink: "https://facebook.com/media/set/?set=a.122107901733254927", ytLink: "https://youtube.com/shorts/btVSAbsSP_M" },
];

const coreMembers = [
  {
    name: "ANIX",
    img: "/anix.jpg",
    fbLink: "https://facebook.com/ANIX",
    ytLink: "https://www.youtube.com/playlist?list=PLpDZkAX_z_42Id4PQvrvfijhaRJ5vAdOq",
  },
  {
    name: "Hankō",
    img: "/hanko.jpg",
    fbLink: "https://facebook.com/Hanko",
    ytLink: "https://youtube.com/Hanko_MV",
  },
  {
    name: "Oni3 : Crimson Kagura",
    img: "/oni3.jpg",
    fbLink: "https://facebook.com/Oni3",
    ytLink: "https://youtube.com/Oni3_MV",
  },
  {
    name: "Zister",
    img: "/zister.jpg",
    fbLink: "https://facebook.com/Zister",
    ytLink: "https://youtube.com/Zister_MV",
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

  return (
    <main className="min-h-screen bg-[#060912] text-white overflow-x-hidden">
      <header className="fixed top-0 z-50 flex h-[60px] w-full items-center justify-between border-b border-white/10 bg-[rgba(6,9,18,0.95)] px-8">
        <div className="text-2xl font-bold tracking-wide text-[#00d2ff]">
          ANI-MATE UNIVERSE
        </div>
        <div className="text-sm text-[#00d2ff]">IDOL WORLD PORTAL</div>
      </header>

      <div className="relative mt-[60px] flex min-h-[calc(100vh-60px)] flex-col lg:flex-row">
        <div className="absolute left-1/2 top-0 bottom-0 hidden w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#ff00cc] to-[#00d2ff] shadow-[0_0_15px_#ff00cc] lg:block" />

        <section className="w-full p-8 lg:w-1/2">
          <div className="mb-5">
            <h1 className="m-0 text-xl uppercase text-[#ff00cc]">CORE MEMBERS</h1>
            <p className="text-sm text-white/60">วงไอดอลที่ผ่านการเดบิวต์แล้ว</p>
          </div>

          <div className="grid h-auto grid-cols-1 gap-5 sm:grid-cols-2 lg:h-[calc(100%-100px)]">
            {coreMembers.map((item) => (
              <div
                key={item.name}
                onClick={() => window.open(item.fbLink, "_blank")}
                className="flex cursor-pointer flex-col justify-between overflow-hidden rounded-xl border-2 border-[#f1c40f] bg-white/[0.03] p-2.5 transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(241,196,15,0.3)]"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="mb-2.5 h-[80%] w-full rounded object-cover"
                />
                <div className="flex items-center justify-between px-1">
                  <span className="text-sm font-bold text-[#f1c40f]">{item.name}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(item.ytLink, "_blank");
                    }}
                    className="rounded bg-[#f1c40f] px-2 py-1 text-[11px] font-bold text-black shadow-[0_0_5px_#f1c40f] transition hover:scale-110 hover:shadow-[0_0_10px_#f1c40f]"
                  >
                    ▶ WATCH
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col items-center p-8 lg:w-1/2">
          <div className="mb-5 w-full">
            <h1 className="m-0 text-xl uppercase text-[#ff00cc]">IDOL LEAGUE</h1>
            <p className="text-sm text-white/60">Project 24 Trainees - Season 1</p>
          </div>

          <div className="grid w-full flex-grow grid-cols-1 gap-4 sm:grid-cols-2">
            {currentData.map((t) => (
              <div
                key={t.id}
                onClick={() => window.open(t.fbLink, "_blank")}
                className="flex cursor-pointer flex-col justify-between rounded-lg border border-white/10 bg-white/[0.03] p-2.5 transition duration-300 hover:-translate-y-1 hover:border-[#ff00cc] hover:shadow-[0_5px_15px_rgba(255,0,204,0.1)]"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="mb-2.5 aspect-video w-full rounded bg-[#1a1a2e] object-cover"
                />
                <div className="flex items-center justify-between px-1">
                  <span className="text-sm font-semibold text-white">{t.name}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(t.ytLink, "_blank");
                    }}
                    className="rounded bg-[#ff00cc] px-2 py-1 text-[11px] font-bold text-black shadow-[0_0_5px_#ff00cc] transition hover:scale-110 hover:shadow-[0_0_10px_#ff00cc]"
                  >
                    ▶ WATCH
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex gap-2">
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`flex h-[35px] w-[35px] items-center justify-center rounded-full border font-bold transition ${
                  page === currentPage
                    ? "border-[#ff00cc] bg-[#ff00cc] text-black shadow-[0_0_10px_#ff00cc]"
                    : "border-white/10 bg-white/5 text-white"
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