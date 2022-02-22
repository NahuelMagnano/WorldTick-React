import React from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/components/pages/ContactoPage.css";
import "../../src/App.css";

const ContactoPage = (props) => {
  const initialForm = {
    nombre: "",
    ciudad: "",
    email: "",
    telefono: "",
    mensaje: "",
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/contacto`,
      formData
    );
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <main>
      <div class="contenedor">
        <div class="cajacontacto">
          <h6 class="superiorcontacto">
            ¡Rellena el siguiente formulario y nos pondremos en contacto contigo
            a la brevedad!
          </h6>
        </div>
        <div class="contcontacto">
          <form action="/contacto" method="post" onSubmit={handleSubmit}>
            <div class="row formu">
              <div class="col">
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  class="form-control"
                  placeholder="Nombre y apellido"
                />
              </div>
            </div>

            <div class="mb-3 formu ">
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                class="form-control"
                placeholder="E-Mail"
              />
              <div id="emailHelp" class="form-text">
                Tranquilo, Ninguna información que nos brindes sera compartida.
              </div>
            </div>

            <div class="col-12 formu">
              <label class="form-label">Teléfono</label>
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                class="form-control"
                placeholder="Agregar su característica"
              />
            </div>

            <div class="col-md-6 formu">
              <label for="inputCity" class="form-label">
                Ciudad
              </label>
              <input
                type="text"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                class="form-control"
              />
            </div>

            <div class="mb-3 formu">
              <label for="exampleFormControlTextarea1" class="form-label">
                Motivo de consulta
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="mensajecontacto">
              {sending ? <p>Enviando...</p> : null}
              {msg ? <p>{msg}</p> : null}
            </div>  
            <div class="col-12 ">
              <button class="btn btn-primary botonform" type="submit">
                Enviar
              </button>
            </div>
          </form>
            
        </div>
      </div>
    </main>
  );
};

export default ContactoPage;
