export default function Hero() {
  return (
    <section className="bg-[#252420] text-white">
      <div className="max-w-[1200px] mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="w-12 h-1 bg-orange-500 mb-6"></div>

          <h1 className="text-4xl font-bold mb-6">
            Pythonda dasturlash <br /> asoslari
          </h1>

          <p className="text-gray-300 mb-8">
            Dasturlash asoslariga oid o'zbek tilidagi ilk mukammal qo'llanma.
            Kitobning har bir bo'limi uchun maxsus video darslar yozilgan.
          </p>

          <button className="bg-orange-500 px-6 py-3 rounded">
            Buyurtma berish
          </button>
        </div>

        <div className="flex justify-center">
          <div className="w-[300px] h-[420px] bg-gray-600 flex items-center justify-center">
            Kitob rasmi
          </div>
        </div>
      </div>
    </section>
  );
}
