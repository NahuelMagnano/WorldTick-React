import React, { useEffect, useState } from "react";
import axios from "axios";
import NoticiasItem from "../components/noticias/NoticiasItem";

import "../styles/components/pages/NoticiasPage.css";
import "../../src/App.css";
import Aos from "aos";
import "aos/dist/aos.css";

const NoticiasPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const cargarNoticias = async () => {
      setLoading(true);

      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/noticias`);
      setNoticias(response.data);
      setLoading(false);
    };
    cargarNoticias();

    Aos.init({ duration: 1500 });
  }, []);

  return (
    <main>
        <div className="mainnot">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            noticias.map((item) => (
              <NoticiasItem
                key={item.id}
                title={item.titulo}
                image={item.imagen}
                body={item.cuerpo}
              />
            ))
          )}
        </div>
    </main>
  );
};

export default NoticiasPage;
