import Image from "next/image";
import Link from "next/link";

export default function Promo() {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo-inner">
          <div className="promo-content">
            <h2 className="promo-heading">
              Bolalar kitoblari uchun ajoyib aksiya!
            </h2>
            <div className="promo-info-wrapper">
              <p className="promo-text">
                Ertaklar, she'rlar, sarguzasht asarlar, fikrlashni o'stirish
                uchun turli mashq qo'llanmalari va komikslar.
              </p>
              <p className="promo-text">
                Aksiyadagi eng katta to'plamda
                <strong className="promo-highlight"> 50 ta kitob </strong>
                ni
                <strong className="promo-highlight"> 350 ming </strong>
                so'mga (aslida 383 ming so'm) sotib olishingiz mumkin.
              </p>
            </div>
            <Link href="#buyurtma" className="main-link">
              Buyurtma berish
            </Link>
          </div>
          <Image
            src="/images/sale-img.svg"
            alt="Kitoblar to'plami ustma-ust joylangan"
            width={440}
            height={440}
            className="promo-img"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}
