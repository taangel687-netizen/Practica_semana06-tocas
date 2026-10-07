import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "🏠 Home" },
  { to: "/productos", label: "🛒 Productos" },
  { to: "/formulario", label: "📝 Formulario" },
  { to: "/about", label: "ℹ️ About" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <span className="brand">CaritaPintada</span>
      <nav>
        {links.map((l) => (
          // En React Router v6 activeClassName ya no existe: className recibe una función con isActive
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/"}
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
