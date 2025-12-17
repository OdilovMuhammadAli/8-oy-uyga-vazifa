import Image from "next/image";

export default function Stats() {
  const featuresData = [
    {
      id: 1,
      icon: "/images/cursor.svg",
      title: "Oson buyurtma qilish",
      description:
        "Akademnashr.uz saytidan ozingizga yoqqan kitobni sodda usulda buyurtma qila olasiz.",
    },
    {
      id: 2,
      icon: "/images/star.svg",
      title: "Eng sara kitoblar",
      description:
        "Trenddagi eng ommabop, turli auditoriyalarga moljallangan har xil janrdagi kitoblarni topa olasiz.",
    },
    {
      id: 3,
      icon: "/images/light.svg",
      title: "Tez yetkazib berish",
      description:
        "Ozbekistonning ixtiyoriy hududiga 3 ish kuni ichida, xalqaro buyurtmalarni 10 ish kuni ichida yetkazib beriladi.",
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <hr className="orange-line" />
        <h2 className="features-heading">Nega aynan Akademnashr a?</h2>

        <ul className="features-list">
          {featuresData.map((feature) => (
            <li key={feature.id} className="feature">
              <div className="feature-icon-wrapper">
                <Image src={feature.icon} alt="" width={56} height={56} />
              </div>

              <h3 className="feature-title">{feature.title}</h3>

              <p className="feature-info">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
