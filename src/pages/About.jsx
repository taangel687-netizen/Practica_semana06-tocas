import Card from '../components/Card.jsx'

export default function About() {
  return (
    <>
      <h2 className="section-title">ℹ️ Acerca de</h2>
      <Card title="Tecnologías usadas">
        <ul className="muted">
          <li>React 18 + JSX (componentes, props, children)</li>
          <li>Vite 5 como bundler y servidor de desarrollo</li>
          <li>React Router DOM (client-side routing)</li>
          <li>Axios con async/await y AbortController</li>
          <li>API pública: dummyjson.com/products</li>
        </ul>
      </Card>
      <Card title="Autor">
        <p className="muted">Estudiante: Tocas Anglas Angel · UNCP · Ingeniería de Sistemas</p>
      </Card>
    </>
  )
}
