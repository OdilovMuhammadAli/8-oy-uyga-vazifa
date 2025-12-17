export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <div className="font-bold text-xl">
            Akadem<span className="text-orange-500">nashr</span>
          </div>

          <div className="flex gap-4">
            <span className="w-8 h-8 border rounded-full flex items-center justify-center">
              T
            </span>
            <span className="w-8 h-8 border rounded-full flex items-center justify-center">
              F
            </span>
            <span className="w-8 h-8 border rounded-full flex items-center justify-center">
              I
            </span>
          </div>
        </div>

        {/* LINE */}
        <div className="border-t mb-12"></div>

        {/* LINKS */}
        <div className="grid md:grid-cols-4 gap-10 text-sm text-gray-700">
          <ul className="space-y-3">
            <li>Bosh sahifa</li>
            <li>Kitoblar</li>
            <li>Aksiyalar</li>
            <li>Yangiliklar</li>
            <li>Kontaktlar</li>
          </ul>

          <ul className="space-y-3">
            <li>Ilmiy nashrlar</li>
            <li>Ilmiy-ommabop nashrlar</li>
            <li>Ma'rifiy nashrlar</li>
            <li>Lug'atlar</li>
            <li>Adabiy-badiiy nashrlar</li>
            <li>Abituriyentlar uchun</li>
            <li>Bolalar uchun</li>
          </ul>

          <ul className="space-y-3">
            <li>Ko'p so'raladigan savollar</li>
            <li>Yetkazib berish haqida</li>
            <li>To'lov usullari haqida</li>
          </ul>

          <ul className="space-y-3">
            <li>Bo'sh ish o'rinlari</li>
            <li>Biz bilan bog'lanish</li>
            <li>Maxfiylik nizomi</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
