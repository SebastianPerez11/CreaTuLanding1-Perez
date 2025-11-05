import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
         <ul className="flex gap-4 max-md:gap-2 font-semibold text-lg">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/catalogo"> Catalogo</NavLink>
            <NavLink to="/hombre"> Hombre</NavLink>
            <NavLink to="/mujer"> Mujer</NavLink>
            <NavLink to="/unisex"> Unisex</NavLink>
            <NavLink to="/decants"> Decants</NavLink>
          </ul>
    </>
    
  )
}

export default NavLinks