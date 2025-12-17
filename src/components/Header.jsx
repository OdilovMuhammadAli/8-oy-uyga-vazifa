import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-container container">
        <Link href="/" className="logo-link">
          <Image
            src="/images/logo.svg"
            alt="Akademnashr logo"
            width={227}
            height={60}
          />
        </Link>

        <div className="site-header-actions">
          <nav>
            <ul className="sitenav-list">
              <li className="sitenav-item">
                <Link href="/" className="sitenav-link">
                  Bosh sahifa
                </Link>
              </li>

              <li className="sitenav-item">
                <Link href="#kitoblar" className="sitenav-link">
                  Kitoblar
                </Link>
              </li>

              <li className="sitenav-item">
                <Link href="#aksiyalar" className="sitenav-link">
                  Aksiyalar
                </Link>
              </li>

              <li className="sitenav-item">
                <Link href="#kontaktlar" className="sitenav-link">
                  Kontaktlar
                </Link>
              </li>
            </ul>
          </nav>

          <Link href="#royxat" className="main-link">
            Ro'yxatdan o'tish
          </Link>
        </div>
      </div>
    </header>
  );
}
