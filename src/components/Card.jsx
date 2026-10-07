// Composición con children: Card envuelve cualquier contenido que le pasemos
export default function Card({ title, icon, children }) {
  return (
    <article className="card">
      {icon && <div className="card-icon">{icon}</div>}
      {title && <h3>{title}</h3>}
      {children}
    </article>
  );
}
