export default function VoteGuidePage() {
  return (
    <main className="min-h-screen bg-[#060912] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-12">

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
          <h2 className="text-2xl font-bold text-[#ff7ae5] mb-4">🎤 ภาพรวมการแข่งขัน</h2>
          <p className="text-white/70 leading-7">
            การแข่งขันของไอดอลฝึกหัด 20 คน เพื่อคัดเลือกผู้ชนะเข้าสู่การเดบิวต์อย่างเป็นทางการ
            โดยแบ่งเป็น 4 Stage ระยะเวลา 4 เดือน
          </p>
        </section>

        {/* STAGE */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-[#00d2ff]">📅 รูปแบบการแข่งขัน</h2>

          <div className="space-y-4 text-white/70 leading-7">

            <div>
              <p className="font-bold text-white">🟣 Stage I (เปิดตัว)</p>
              <p>แนะนำตัว ยังไม่มีการโหวต</p>
              <p>ธีม: เต้นสดใส + เพลงผลไม้</p>
            </div>

            <div>
              <p className="font-bold text-white">🔵 Stage II (เริ่มโหวต)</p>
              <p>ธีม: ทะเล • ชุดว่ายน้ำ • ค็อกเทล</p>
              <p>📆 7 – 26 เมษายน</p>
              <p>🗳️ โหวต: 7 – 30 เมษายน</p>
            </div>

            <div>
              <p className="font-bold text-white">🟡 Stage III</p>
              <p>เดือนพฤษภาคม (ประกาศเพิ่มเติม)</p>
            </div>

            <div>
              <p className="font-bold text-white">🔴 Stage IV</p>
              <p>เดือนมิถุนายน (ประกาศเพิ่มเติม)</p>
            </div>

          </div>
        </section>

        {/* RESULT */}
        <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-bold text-[#f1c40f] mb-4">🏆 การตัดสิน</h2>
          <ul className="space-y-2 text-white/70">
            <li>• Top 3 จากคะแนนโหวต</li>
            <li>• Top 2 จาก YouTube (วิว × ไลก์)</li>
            <li>• Producer Pick 1 คน</li>
          </ul>
        </section>

        {/* VOTE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#ff7ae5]">🗳️ กติกาการโหวต</h2>

          <ul className="space-y-2 text-white/70">
            <li>• เริ่มโหวตตั้งแต่ Stage II</li>
            <li>• โหวตผ่าน LINE OA</li>
            <li>• 1 รอบ = 1 สิทธิ์</li>
            <li>• รวม 3 รอบ = 3 สิทธิ์</li>
            <li>• ยิ่งโหวตมาก = โอกาสลุ้นรางวัลมาก</li>
          </ul>
        </section>

        {/* REWARD MAIN */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#00d2ff]">🎁 รางวัลหลัก</h2>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
            <p>🎁 ปลอกหมอนข้าง 1/1 (ไม่ผลิตซ้ำ)</p>
            <p>🎁 Digital Art + คลิปพิเศษ</p>
            <p>👉 รวม 55 รางวัล</p>
          </div>
        </section>

        {/* REWARD BONUS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#ff7ae5]">🎀 รางวัลผู้เข้าร่วม</h2>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
            <p>🎁 ปลอกหมอน ANIX</p>
            <p>🎁 พวงกุญแจอะคริลิก</p>
            <p>👉 รวม 55 รางวัล</p>
          </div>
        </section>

        {/* SUMMARY */}
        <section className="text-center">
          <p className="text-xl font-bold text-white">
            🎁 รวมกว่า 110 รางวัล
          </p>
          <p className="text-white/60 mt-2">
            ของรางวัลจะจัดส่งภายใน 30 วันหลังประกาศผล
          </p>
        </section>

      </div>
    </main>
  );
}