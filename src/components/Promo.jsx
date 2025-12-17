export default function Promo() {
  return (
    <section className="py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="bg-[#252420] text-white rounded-lg p-12 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Bolalar kitoblari uchun <br /> ajoyib aksiya!
            </h3>

            <p className="text-gray-300 mb-6">
              Ertaklar, she’rlar va qiziqarli kitoblar katta chegirmada.
            </p>

            <button className="bg-orange-500 px-6 py-3 rounded">
              Buyurtma berish
            </button>
          </div>

          <div className="flex justify-center">
            <div className="w-[260px] h-[200px] bg-gray-600 flex items-center justify-center">
              Kitoblar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
