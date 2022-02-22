import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import GPage from './pages/GPage';
import HomePage from './pages/HomePage';
import NoticiasPage from './pages/NoticiasPage';


function App() {
  return (
      <Router>
          <Header></Header>
          <Nav />
          <Routes>
            <Route path = "/" exact element = {<HomePage />} />
            <Route path = "/noticias" exact element = {<NoticiasPage />} />
            <Route path = "/contacto" exact element = {<ContactoPage />} />
            <Route path = "/grandespremios" exact element = {<GPage />} />
          </Routes>
          <Footer />
      </Router>
  );
}

export default App;
