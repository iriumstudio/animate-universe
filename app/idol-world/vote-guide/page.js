export default function VoteGuidePage() {
  const pillowRewards = [
    { id: 1, name: "ANIX : HIME", subtitle: "ตัวอย่างของรางวัล", img: "/pillow1.jpg" },
    { id: 2, name: "ANIX : Hikari", subtitle: "ตัวอย่างของรางวัล", img: "/pillow2.jpg" },
    { id: 3, name: "ANIX : Runa", subtitle: "ตัวอย่างของรางวัล", img: "/pillow3.jpg" },
    { id: 4, name: "ANIX : Nami", subtitle: "ตัวอย่างของรางวัล", img: "/pillow4.jpg" },
    { id: 5, name: "ANIX : Nia", subtitle: "ตัวอย่างของรางวัล", img: "/pillow5.jpg" },
  ];

  return (
    <main className="min-h-screen bg-[#060912] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* TITLE */}
        <section>
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#ff7ae5] to-[#00d2ff] bg-clip-text text-transparent">
            วิธีการโหวต & เงื่อนไขกิจกรรม
          </h1>
          <p className="mt-4 text-white/70">
            AniMate Trainee iDol League Season 1
          </p>
        </section>

        {/* OVERVIEW */}
        <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-bold text-[#ff7ae5] mb-4">
            🎤 ภาพรวมการแข่งขัน
          </h2>
          <p className="text-white/70 leading-7">
            การแข่งขันของไอดอลฝึกหัด 20 คน เพื่อคัดเลือกผู้ชนะเข้าสู่การเดบิวต์
          </p>
        </section>

        {/* STAGE */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-[#00d2ff]">
            📅 รูปแบบการแข่งขัน
          </h2>

          <div className="space-y-4 text-white/70">
            <div>
              <p className="font-bold text-white">🟣 Stage I</p>
              <p>แนะนำตัว</p>
            </div>

            <div>
              <p className="font-bold text-white">🔵 Stage II</p>
              <p>เริ่มโหวต</p>
            </div>

            <div>
              <p className="font-bold text-white">🟡 Stage III</p>
              <p>เดือนพฤษภาคม</p>
            </div>

            <div>
              <p className="font-bold text-white">🔴 Stage IV</p>
              <p>เดือนมิถุนายน</p>
            </div>
          </div>
        </section>

        {/* RESULT */}
        <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-bold text-[#f1c40f] mb-4">
            🏆 การตัดสิน
          </h2>
          <ul className="text-white/70 space-y-2">
            <li>• Top 3 โหวต</li>
            <li>• Top 2 YouTube</li>
            <li>• Producer Pick</li>
          </ul>
        </section>

        {/* VOTE */}
        <section>
          <h2 className="text-2xl font-bold text-[#ff7ae5] mb-4">
            🗳️ กติกาการโหวต
          </h2>

          <ul className="text-white/70 space-y-2">
            <li>• โหวตผ่าน LINE</li>
            <li>• 1 รอบ = 1 สิทธิ์</li>
            <li>• ยิ่งโหวตมาก ยิ่งมีสิทธิ์ลุ้น</li>
          </ul>
        </section>

        {/* 🔥 PILLOW SECTION */}
        <section className="space-y-6 rounded-[32px] border border-[#ff00cc]/20 bg-[radial-gradient(circle_at_top,rgba(255,0,204,0.10),rgba(255,255,255,0.015)_45%,rgba(255,255,255,0.01))] p-6 md:p-8 shadow-[0_0_30px_rgba(255,0,204,0.08)]">

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#ff00cc]">
              🛏️ ตัวอย่างรางวัลหมอนข้าง
            </h2>

            <p className="max-w-3xl text-sm leading-7 text-white/65">
              ผู้ร่วมโหวตมีสิทธิ์ลุ้นรับปลอกหมอนข้างลายพิเศษจากกิจกรรม Season 1
            </p>

            <p className="text-sm font-bold text-pink-300">
              🎯 ยิ่งโหวตมาก ยิ่งมีสิทธิ์ลุ้นรับมาก
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {pillowRewards.map((item) => (
              <div
                key={item.id}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-3 hover:-translate-y-1 transition hover:border-[#ff00cc]/40 hover:shadow-[0_10px_28px_rgba(255,0,204,0.18)]"
              >
                <div className="relative overflow-hidden rounded-[22px] border border-white/10">

                  <div className="absolute left-3 top-3 z-10 rounded-full bg-black/50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-pink-200">
                    Reward
                  </div>

                  <a href={item.img} target="_blank">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="aspect-[1/3] w-full object-cover transition group-hover:scale-[1.02]"
                    />
                  </a>

                </div>

                <div className="pt-3">
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-xs text-white/60">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* NOTE */}
          <div className="bg-yellow-400/5 border border-yellow-400/20 p-4 rounded-xl text-yellow-200 text-sm">
            ⚠️ ภาพเป็นตัวอย่าง ของจริงอาจมีการเปลี่ยนแปลง
          </div>

        </section>

        {/* SUMMARY */}
        <section className="text-center">
          <p className="text-xl font-bold">🎁 รวมกว่า 110 รางวัล</p>
          <p className="text-white/60 mt-2">
            จัดส่งภายใน 30 วัน
          </p>
        </section>

      </div>
    </main>
  );
}