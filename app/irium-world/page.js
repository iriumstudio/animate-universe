"use client";

const videos = [
  {
    title: "Dragon Slayer: Oath of the Last Flame | คำสาบานแห่งนักรบมังกร [Narrative Cinematic Short Film]",
    description: "เมื่อโลกถูกปกคลุมด้วยเปลวเพลิงและมังกรกลายเป็นผู้ครองฟ้า ความหวังของมนุษย์เหลือเพียงหนึ่งเดียว",
    youtubeUrl: "https://youtu.be/sZZZgft6E_Q",
    featured: true,
  },
  {
    title: "คอยขิง",
    description: "อั๊วคอยขิงอยู่! ตำนานแปะขายโจ๊กคนจีนไหหลำ ที่ถูกนำมาทำเป็นเพลงสุดกวนอั๊วคอยขิงอยู่! ตำนานแปะขายโจ๊กคนจีนไหหลำ ที่ถูกนำมาทำเป็นเพลงสุดกวน ",
    youtubeUrl: "https://youtu.be/xq5Wg5IN6Eg",
  },
  {
    title: "พี่โตจ้องจะเล่นคุณ - พี่โต iRium | Official MV",
    description: "เมื่อพี่โต นักเต้นกล้ามใหญ่อารมณ์ดี มาเจอกับนักเต้นสาวเอว 6G ความสนุกจึงบังเกิด",
    youtubeUrl: "https://youtu.be/nJK4TxWkUik",
  },
  {
    title: "เธอไปเป็นนางฟ้าบนสวรรค์ - iRium | Official MV",
    description: "บางทีคนที่เรารักก็ไม่ได้จากไปไหน แค่ย้ายจากโลกมนุษย์สู่ฟากฟ้า",
    youtubeUrl: "https://youtu.be/vHsB1sJBV4I",
  },
  {
    title: "ความธรรมดาที่แสนพิเศษ - iRium | Official MV ",
    description: "ขอบคุณที่ทำให้ทุกวันธรรมดา…กลายเป็นช่วงเวลาที่แสนพิเศษ แม้จะดูธรรมดา แต่ในทุกช่วงเวลา มันก็อบอุ่นเสมอ",
    youtubeUrl: "https://youtu.be/HiI448CgGtY",
  },
  {
    title: "พี่โต ORA ORA ORA! - iRium | Official MV",
    description: "ศึกเต้นเดือด 130 BPM ที่ทั้งซอยต้องสั่นไหว",
    youtubeUrl: "https://youtu.be/gYIn-u2HGnQ",
  },
  {
    title: "[เต้นเดือดทะลุเล้า]  ก.เอ๋ย ก.ไก่ - พี่โต iRium feat.ไก่ไทยใจละติน & ควายไทยใจเกเร | Official MV",
    description: "เพลง ก.เอ๋ย ก.ไก่ จะเดือดที่สุดตั้งแต่เคยมีมา เมื่อ พี่โต นักเต้นสายกล้ามแน่นอารมณ์ดี ปะทะ ไก่โต้ง นักเต้นกล้ามใหญ่ที่จะมาโชว์พลังของ ไก่ไทยใจละติน",
    youtubeUrl: "https://youtu.be/mfu31YoeZmM",
  },
  {
    title: "[ปฎิบัติการณ์ตามรักข้ามโลก] เสี่ยงแค่ไหนก็ยอม",
    description: "คุณจะยอมเสี่ยงมากแค่ไหน เพื่อที่จะตามหารักแท้",
    youtubeUrl: "https://youtu.be/qmQhFQPiv2I",
  },
  {
    title: "ชั้น 14  - iRium | Official MV",
    description: "ในตึกเฮี้ยนที่กล้องวงจรปิดเสียตลอดทั้งปี อะไรทำให้เขาต้องไปยังที่นั่น!",
    youtubeUrl: "https://youtu.be/EE0TyXEnoqY",
  },
  {
    title: "เลือดแลกแผ่นดิน - iRium | Official MV",
    description: "นี่คือเพลง เลือดแลกแผ่นดิน บทเพลงที่จะปลุกหัวใจคนไทยให้ลุกขึ้นสู้!",
    youtubeUrl: "https://youtu.be/7WRN0mRLrUM",
  },
  {
    title: "รอเธอ (Endless Waiting) - iRium | 90s Reimagined",
    description: "เรื่องราวได้แรงบันดาลใจจากผู้ชายคนหนึ่ง ที่เฝ้ารอผู้หญิงที่เขารักมามากกว่า 15 ปี",
    youtubeUrl: "https://youtu.be/37ry7I3qwVg",
  },
  {
    title: "เต้นแบบพี่โต - พี่โต iRium | Official MV",
    description: "เปิดตัว พี่โต (Toro) นักร้องน้องใหม่สายลาตินขี้เล่น ที่พร้อมจะพาคุณโยกไปกับดนตรีลาตินสนุกๆ",
    youtubeUrl: "https://youtu.be/dQ183Ywoy7c",
  },
  {
    title: "iRium Clip 13",
    description: "ใส่คำอธิบายคลิปตรงนี้",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_13",
  },
  {
    title: "iRium Clip 14",
    description: "ใส่คำอธิบายคลิปตรงนี้",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_14",
  },
  {
    title: "iRium Clip 15",
    description: "ใส่คำอธิบายคลิปตรงนี้",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_15",
  },
  {
    title: "iRium Clip 16",
    description: "ใส่คำอธิบายคลิปตรงนี้",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_16",
  },
  {
    title: "iRium Clip 17",
    description: "ใส่คำอธิบายคลิปตรงนี้",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_17",
  },
  {
    title: "iRium Clip 18",
    description: "ใส่คำอธิบายคลิปตรงนี้",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_18",
  },
  {
    title: "iRium Clip 19",
    description: "ใส่คำอธิบายคลิปตรงนี้",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_19",
  },
  {
    title: "iRium Clip 20",
    description: "ใส่คำอธิบายคลิปตรงนี้",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_20",
  },
  {
    title: "iRium Clip 21",
    description: "ใส่คำอธิบายคลิปตรงนี้",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_21",
  },
  {
    title: "iRium Clip 22",
    description: "ใส่คำอธิบายคลิปตรงนี้",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_22",
  },
  {
    title: "iRium Clip 23",
    description: "ใส่คำอธิบายคลิปตรงนี้",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_23",
  },
  {
    title: "iRium Clip 24",
    description: "ใส่คำอธิบายคลิปตรงนี้",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_24",
  },
  {
    title: "iRium Clip 25",
    description: "ใส่คำอธิบายคลิปตรงนี้",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_25",
  },
  {
    title: "iRium Clip 26",
    description: "ใส่คำอธิบายคลิปตรงนี้",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_26",
  },
  {
    title: "iRium Clip 27",
    description: "ใส่คำอธิบายคลิปตรงนี้",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_27",
  },
  {
    title: "iRium Clip 28",
    description: "ใส่คำอธิบายคลิปตรงนี้",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_28",
  },
  {
    title: "iRium Clip 29",
    description: "ใส่คำอธิบายคลิปตรงนี้",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_29",
  },
  {
    title: "iRium Clip 30",
    description: "ใส่คำอธิบายคลิปตรงนี้",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_30",
  },
];

function getYoutubeVideoId(url) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }

    if (parsed.searchParams.get("v")) {
      return parsed.searchParams.get("v");
    }

    const parts = parsed.pathname.split("/");
    const embedIndex = parts.findIndex((part) => part === "embed");
    if (embedIndex !== -1 && parts[embedIndex + 1]) {
      return parts[embedIndex + 1];
    }

    return null;
  } catch {
    return null;
  }
}

function getYoutubeEmbedUrl(url) {
  const videoId = getYoutubeVideoId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
}

function getYoutubeWatchUrl(url) {
  const videoId = getYoutubeVideoId(url);
  return videoId ? `https://www.youtube.com/watch?v=${videoId}` : "#";
}

function VideoCard({ video, featured = false }) {
  const embedUrl = getYoutubeEmbedUrl(video.youtubeUrl);
  const watchUrl = getYoutubeWatchUrl(video.youtubeUrl);

  if (!embedUrl) return null;

  return (
    <article
      className={`overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/[0.03] shadow-[0_0_20px_rgba(34,211,238,0.08)] ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="aspect-video w-full overflow-hidden bg-black">
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <div className="p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-lg font-bold text-cyan-200">{video.title}</h2>
            <p className="mt-2 text-sm leading-6 text-white/70">
              {video.description}
            </p>
          </div>

          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-xl border border-red-400/40 bg-red-500/15 px-4 py-2 text-sm font-semibold text-red-200 transition hover:bg-red-500/25 hover:text-white"
          >
            ▶ เปิดบน YouTube
          </a>
        </div>
      </div>
    </article>
  );
}

export default function IRiumWorldPage() {
  const featuredVideo = videos.find((video) => video.featured) || videos[0];
  const normalVideos = videos.filter((video) => video !== featuredVideo);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),rgba(0,0,0,0)_35%),linear-gradient(to_bottom,#030712,#060b16,#02040a)] text-white">
      <header className="sticky top-0 z-40 border-b border-cyan-400/10 bg-[rgba(2,6,23,0.75)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
              AniMate Universe
            </p>
            <h1 className="mt-1 text-2xl font-black text-cyan-200">
              iRium World
            </h1>
          </div>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
          >
            ไปที่ YouTube
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-12 pt-10">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">
            Main Broadcast Zone
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-white">
            รวมคลิปจากโลก iRium แบบดูต่อได้ในเว็บ
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70">
            หน้านี้ออกแบบให้เป็นศูนย์รวมวิดีโอของ iRium World ก่อนในช่วงเริ่มต้น
            บอสแค่เปลี่ยนลิงก์ YouTube, ชื่อคลิป และรายละเอียดคลิป
            ระบบฝังวิดีโอและเลย์เอาต์ที่เหลือพร้อมใช้งานจริงแล้ว
          </p>
        </div>

        {featuredVideo && (
          <div className="mb-8 grid grid-cols-1 gap-6">
            <VideoCard video={featuredVideo} featured />
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {normalVideos.map((video, index) => (
            <VideoCard key={`${video.title}-${index}`} video={video} />
          ))}
        </div>
      </section>
    </main>
  );
}