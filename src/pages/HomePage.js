import React from "react";
import "../styles/components/pages/HomePage.css";
import "../../src/App.css";

const HomePage = (props) => {
  return (
    <main className="maininicio">
      <div className="contenedorindex">
        <div>
          <div>
            <div className="containerimg">
              <img
                className="imagenindex"
                src="images/autof1.jpg"
                alt="pngF1"
              />
            </div>
            <div className="contenedortextohome">
              <div className="titulohome">
                <h1>Bienvenidos a <span className="worldtick">WorldTick</span></h1>
              </div>
              <div className="textohome">
                <p>
                  De la mano de la <span>Fórmula 1</span> presentamos esta web
                  en la que encontrarán todos los datos necesarios para seguir
                  día a día el campeonato de la <span>MÁXIMA CATEGORÍA</span>.
                </p>
                <p>
                  Estarás habilitado a leer las últimas noticias del mundo
                  automovilístico y contactarte con nosotros ante cualquier duda.
                </p>
                <div className="oracionhome">
                  <p>INCLUSO COMPRAR TICKETS A LOS PRÓXIMOS GRANDES PREMIOS!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sombra"></div>
    </main>
  );
};

export default HomePage;
