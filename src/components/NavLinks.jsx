import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="flex gap-4 max-md:gap-2 font-semibold text-lg">
      <li>
        <NavLink to="/">Inicio</NavLink>
      </li>
      <li>
        <NavLink to="/catalogo">Catálogo</NavLink>
      </li>
      <li>
        <NavLink to="/catalogo/Hombre">Hombre</NavLink>
      </li>
      <li>
        <NavLink to="/catalogo/Mujer">Mujer</NavLink>
      </li>
      <li>
        <NavLink to="/catalogo/Unisex">Unisex</NavLink>
      </li>

    </ul>
  );
};

export default NavLinks;
