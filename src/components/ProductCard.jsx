import Card from "./Card.jsx";

// Props: recibe un producto. Renderizado condicional con && y ternario
export default function ProductCard({ product }) {
  const {
    title,
    price,
    rating,
    thumbnail,
    category,
    discountPercentage,
    stock,
  } = product;
  return (
    <Card>
      <img src={thumbnail} alt={title} loading="lazy" className="thumb" />
      <span className="tag">{category}</span>
      <h3>{title}</h3>
      <p className="price">
        ${price}{" "}
        {discountPercentage > 10 && (
          <span className="badge">-{Math.round(discountPercentage)}%</span>
        )}
      </p>
      <p className="muted">
        ⭐ {rating} · {stock > 0 ? `${stock} disponibles` : "Agotado"}
      </p>
    </Card>
  );
}
