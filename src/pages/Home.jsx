import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";

const features = [
  {
    icon: "🧭",
    title: "React Router",
    text: "Navegación entre páginas sin recargar el navegador.",
  },
  {
    icon: "📡",
    title: "Axios + async/await",
    text: "Consumo de API con estados loading, data y error.",
  },
  {
    icon: "🔁",
    title: "Render iterativo",
    text: "Listas con .map() y key única y estable.",
  },
  {
    icon: "📝",
    title: "Formularios controlados",
    text: "Inputs con useState, validación y onSubmit.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Bienvenido a CaritaPintada</h1>
        <p>
          SPA construida con React 18, Vite 5, React Router y Axios. Navega
          entre las páginas sin recargar el navegador.
        </p>
        <Link to="/productos" className="btn">
          Ver catálogo de productos
        </Link>
      </section>

      <h2 className="section-title">✨ Características implementadas</h2>
      <div className="grid">
        {features.map((f) => (
          <Card key={f.title} icon={f.icon} title={f.title}>
            <p className="muted">{f.text}</p>
          </Card>
        ))}
      </div>
    </>
  );
}
