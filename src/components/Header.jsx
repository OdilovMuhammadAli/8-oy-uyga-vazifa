export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-5">
        <div className="font-bold text-lg">Akademnashr</div>

        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#">Bosh sahifa</a>
          <a href="#">Kitoblar</a>
          <a href="#">Aksiyalar</a>
          <a href="#">Kontaktlar</a>
        </nav>

        <button className="bg-orange-500 text-white px-5 py-2 rounded">
          Ro'yxatdan o'tish
        </button>
      </div>
    </header>
  );
}
