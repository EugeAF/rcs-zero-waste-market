import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Productos from './Components/Productos/Productos';
import ProductosDetalle from './Components/ProductosDetalle/ProductosDetalle';
import Contactos from './Components/Contactos/Contactos';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/productos/:id">
            <ProductosDetalle />
          </Route>
          <Route path="/productos">
            <Productos />
          </Route>
          <Route path="/contacto">
            <Contactos />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
