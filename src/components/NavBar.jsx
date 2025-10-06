import LinkNavBar from "./LinkNavBar";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#1a1a1a] w-full max-xl:flex-col max-md:px-2 max-md:gap-4 p-10 text-white flex items-center justify-between">
        <h1 className="text-2xl font-medium font-serif">NOIR ESSENCE</h1>
        <header className="flex gap-10 items-center max-md:flex-col max-md:gap-6">
          <ul className="flex gap-4 max-md:gap-2">
            <LinkNavBar text={"Inicio"} />
            <LinkNavBar text={"Catálogo"} />
            <LinkNavBar text={"Hombre"} />
            <LinkNavBar text={"Mujer"} />
            <LinkNavBar text={"Unisex"} />
            <LinkNavBar text={"Decants"} />
          </ul>
          <CartWidget />
        </header>
      </nav>
    </>
  );
};

export default Navbar;
