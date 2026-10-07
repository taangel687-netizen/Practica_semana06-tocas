import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

export default function Layout() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        {/* Outlet renderiza la página activa SIN recargar el navegador */}
        <Outlet />
      </main>
      <footer className="footer">
        TecnoStore · Práctica Semana 06 · Desarrollo de Aplicaciones Web
      </footer>
    </div>
  );
}
