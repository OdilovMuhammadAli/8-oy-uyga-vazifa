export default function Stats() {
  return (
    <section className="py-24">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-16">
          Nega aynan <br /> Akademnashr?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4"></div>
            <h3 className="font-bold mb-2">Oson buyurtma qilish</h3>
            <p className="text-sm text-gray-600">
              Sayt orqali tez va oson buyurtma berish mumkin.
            </p>
          </div>

          <div>
            <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4"></div>
            <h3 className="font-bold mb-2">Eng sara kitoblar</h3>
            <p className="text-sm text-gray-600">
              Eng ommabop va foydali kitoblar jamlangan.
            </p>
          </div>

          <div>
            <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4"></div>
            <h3 className="font-bold mb-2">Tez yetkazib berish</h3>
            <p className="text-sm text-gray-600">
              O‘zbekiston bo‘ylab tez yetkazib beriladi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
