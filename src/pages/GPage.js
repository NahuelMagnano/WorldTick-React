import React from "react";
import "../styles/components/pages/GPage.css";
import "../../src/App.css";

const GPage = (props) => {

  function mostrarMensaje(){
    alert("Lo siento, pero no quedan entradas disponibles");
  }

  return (
    <main>
      <div className="contenedorGP">
        <ul className="GP">
          <div className="trio">
            <div className="gpind">
              <li> Gran Premio de Gran Bretaña</li>
              <div className="imGP">
                <img src="images/Gran Bretaña.png" alt="GP Gran Bretaña" />
              </div>
              <p className="txtgp">Fecha: 18/07/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>

            <div className="gpind">
              <li> Gran Premio de Italia</li>
              <div className="imGP">
                <img src="images/Italia.png" alt="GP Italia" />
              </div>
              <p className="txtgp">Fecha: 12/10/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>

            <div className="gpind">
              <li> Gran Premio de Mónaco</li>
              <div className="imGP">
                <img src="images/Monaco.png" alt="GP Monaco" />
              </div>
              <p className="txtgp">Fecha: 23/05/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>
          </div>

          <div className="duo">
            <div className="gpind">
              <li> Gran Premio de Bélgica</li>
              <div className="imGP">
                <img src="images/Belgica.png" alt="GP Belgica" />
              </div>
              <p className="txtgp">Fecha: 28/08/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>

            <div className="gpind">
              <li> Gran Premio de Francia</li>
              <div className="imGP">
                <img src="images/Francia.png" alt="GP Francia" />
              </div>
              <p className="txtgp">Fecha: 20/06/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>
          </div>

          <div className="trio">
            <div className="gpind">
              <li> Gran Premio de España</li>
              <div className="imGP">
                <img src="images/España.png" alt="GP España" />
              </div>
              <p className="txtgp">Fecha: 09/05/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>

            <div className="gpind">
              <li> Gran Premio de Canadá</li>
              <div className="imGP">
                <img src="images/Canada.png" alt="GP Canada" />
              </div>
              <p className="txtgp">Fecha: 02/05/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>

            <div className="gpind">
              <li> Gran Premio de Brasil</li>
              <div className="imGP">
                <img src="images/Brazil.png" alt="GP Brasil" />
              </div>
              <p className="txtgp">Fecha: 15/11/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>
          </div>

          <div className="duo">
            <div className="gpind">
              <li> Gran Premio de U.S.A.</li>
              <div className="imGP">
                <img src="images/Estados Unidos.png" alt="GP Estados Unidos" />
              </div>
              <p className="txtgp">Fecha: 24/10/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>

            <div className="gpind">
              <li> Gran Premio de Hungría</li>
              <div className="imGP">
                <img src="images/Hungria.png" alt="GP Hungria" />
              </div>
              <p className="txtgp">Fecha: 01/08/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>
          </div>

          <div className="trio">
            <div className="gpind">
              <li> Gran Premio de Australia</li>
              <div className="imGP">
                <img src="images/Australia.png" alt="GP Australia" />
              </div>
              <p className="txtgp">Fecha: 04/07/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>

            <div className="gpind">
              <li> Gran Premio de Austria</li>
              <div className="imGP">
                <img src="images/Austria.png" alt="GP Austria" />
              </div>
              <p className="txtgp">Fecha: 18/04/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>

            <div className="gpind">
              <li> Gran Premio de Holanda</li>
              <div className="imGP">
                <img src="images/Paises Bajos.png" alt="GP Paises Bajos" />
              </div>
              <p className="txtgp">Fecha: 27/06/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>
          </div>

          <div className="duo">
            <div className="gpind">
              <li> Gran Premio de México</li>
              <div className="imGP">
                <img src="images/Mexico.png" alt="GP Mexico" />
              </div>
              <p className="txtgp">Fecha: 07/11/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>

            <div className="gpind">
              <li> Gran Premio de Baréin</li>
              <div className="imGP">
                <img src="images/Bahrein.png" alt="GP Bahrein" />
              </div>
              <p className="txtgp">Fecha: 28/03/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>
          </div>

          <div className="trio">
            <div className="gpind">
              <li> Gran Premio de Japon</li>
              <div className="imGP">
                <img src="images/Japon.png" alt="GP Japon" />
              </div>
              <p className="txtgp">Fecha: 10/10/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>

            <div className="gpind">
              <li> Gran Premio de Abu Dabi</li>
              <div className="imGP">
                <img src="images/Abu Dhabi.png" alt="GP Abu Dhabi" />
              </div>
              <p className="txtgp">Fecha: 12/12/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>

            <div className="gpind">
              <li> Gran Premio de Singapur</li>
              <div className="imGP">
                <img src="images/Singapur.png" alt="GP Singapur" />
              </div>
              <p className="txtgp">Fecha: 26/09/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>
          </div>

          <div className="individual">
            <div className="gpind">
              <li> Gran Premio de Azerbaiyán</li>
              <div className="imGP">
                <img src="images/Azerbaijan .png" alt="GP Azerbaijan" />
              </div>
              <p className="txtgp">Fecha: 04/12/21</p>
              <button type="submit" onClick= {mostrarMensaje} className="botongp">Comprar entradas</button>
            </div>
          </div>
        </ul>
      </div>
    </main>
  );
};

export default GPage;
