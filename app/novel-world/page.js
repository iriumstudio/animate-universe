"use client";

import { useRouter } from "next/navigation";

export default function NovelWorldPage() {
  const router = useRouter();

  const novels = [
    {
      id: 1,
      title: "พันธะดนตรี 7 นาง",
      subtitle: "สำนักยุทธดนตรี กับคู่หมั้นทั้งเจ็ด",
      img: "/novel1.jpg",
      link: "/novel-world/novel-1",
      featured: true,
    },
  ];

  return (
    <main className="min-h-screen bg-[#060912] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* HEADER */}
        <section>
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#00d2ff] to-[#ff7ae5] bg-clip-text text-transparent">
            Novel World
          </h1>
          <p className="mt-4 text-white/70">
            โลกของนิยาย AniMate • คลิกเพื่อเข้าสู่เรื่องราว
          </p>
        </section>

        {/* LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {novels.map((novel) => (
            <div
              key={novel.id}
              onClick={() => router.push(novel.link)}
              className="group cursor-pointer rounded-[28px] border border-[#00d2ff]/30 bg-white/[0.04] p-4 hover:-translate-y-1 transition hover:shadow-[0_0_30px_rgba(0,210,255,0.2)]"
            >
              <div className="relative overflow-hidden rounded-[20px]">

                {novel.featured && (
                  <div className="absolute left-3 top-3 z-10 bg-black/50 px-3 py-1 rounded-full text-xs text-cyan-200">
                    ✨ Featured
                  </div>
                )}

                <img
                  src={novel.img}
                  className="w-full aspect-[16/9] object-cover group-hover:scale-[1.03] transition"
                />
              </div>

              <div className="pt-4">
                <h2 className="text-xl font-bold text-cyan-300">
                  {novel.title}
                </h2>
                <p className="text-sm text-white/60 mt-1">
                  {novel.subtitle}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}