import { useState } from "react";

const initial = { nombre: "", email: "", asunto: "consulta", mensaje: "" };

// Valida UN solo campo y devuelve el mensaje de error ('' si está bien)
function validateField(name, value) {
  if (name === "nombre" && value.trim().length < 3)
    return "Mínimo 3 caracteres";
  if (name === "email" && !/^\S+@\S+\.\S+$/.test(value))
    return "Correo no válido";
  if (name === "mensaje" && value.trim().length < 10)
    return "Mínimo 10 caracteres";
  return "";
}

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Si el campo ya tenía error, se revalida mientras escribe
    // para que el mensaje desaparezca apenas lo corrija
    if (errors[name])
      setErrors({ ...errors, [name]: validateField(name, value) });
  };

  // onBlur: se ejecuta al salir del campo -> valida ahí mismo
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Al enviar se validan todos los campos por si alguno nunca fue tocado
    const err = {};
    ["nombre", "email", "mensaje"].forEach((n) => {
      const msg = validateField(n, form[n]);
      if (msg) err[n] = msg;
    });
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setSent([{ ...form, id: crypto.randomUUID() }, ...sent]);
      setForm(initial);
    }
  };

  return (
    <>
      <h2 className="section-title">📝 Contáctanos</h2>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <label>
          Nombre
          <input
            className="input"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.nombre && <small className="error">{errors.nombre}</small>}
        </label>
        <label>
          Correo
          <input
            className="input"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </label>
        <label>
          Asunto
          <select
            className="input"
            name="asunto"
            value={form.asunto}
            onChange={handleChange}
          >
            <option value="consulta">Consulta</option>
            <option value="reclamo">Reclamo</option>
            <option value="pedido">Pedido especial</option>
          </select>
        </label>
        <label>
          Mensaje
          <textarea
            className="input"
            rows="4"
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.mensaje && <small className="error">{errors.mensaje}</small>}
        </label>
        <button className="btn" type="submit">
          Enviar mensaje
        </button>
      </form>

      {sent.length > 0 && (
        <h3 className="section-title">Mensajes enviados ({sent.length})</h3>
      )}
      <ul className="sent">
        {sent.map((m) => (
          <li key={m.id}>
            <strong>{m.nombre}</strong> ({m.email}) · <em>{m.asunto}</em>
            <br />
            {m.mensaje}
          </li>
        ))}
      </ul>
    </>
  );
}
