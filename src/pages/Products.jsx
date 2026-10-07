import { useState } from 'react'
import useFetch from '../hooks/useFetch.js'
import { getProducts } from '../services/api.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Products() {
  const { data: products, loading, error } = useFetch(getProducts)
  const [search, setSearch] = useState('')

  // Dato derivado: se filtra al renderizar, sin nuevo fetch ni estado extra
  // (así se evita el renderizado/petición innecesaria tras cada tecla).
  const filtered = products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <h2 className="section-title">🛒 Catálogo de productos</h2>
      <input className="input" placeholder="Buscar producto..." value={search}
        onChange={(e) => setSearch(e.target.value)} />

      {loading && <p className="state">⏳ Cargando productos...</p>}
      {error && <p className="state error">❌ {error}</p>}
      {!loading && !error && filtered.length === 0 && <p className="state">No se encontraron productos.</p>}

      <div className="grid">
        {/* key = id único y estable (no el index) */}
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </>
  )
}
