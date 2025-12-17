import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container container">
        <div className="hero-content">
          <hr className="orange-line" />
          <h2 className="hero-heading">Pythonda dasturlash asoslari</h2>

          <p className="hero-text">
            Dasturlash asoslariga oid o'zbek tilidagi ilk eng mukammal
            qo'llanma.
            <br />
            Kitobning har bir bo'limi uchun maxsus video darslar yozilgan
            bo'lib,
            <br />
            ularga kitobda ko'rsatilgan QR kod orqali o'tish mumkin.
          </p>

          <Link href="#buyurtma" className="main-link">
            Buyurtma berish
          </Link>
        </div>

        <Image
          src="/images/python-book.svg"
          alt="Qo'lda ushlab turilgan Pythonda dasturlash asoslari kitobi"
          width={510}
          height={510}
          className="hero-img"
          quality={100}
          priority
        />
      </div>
    </section>
  );
}
