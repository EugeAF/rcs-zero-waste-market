import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function ProductosDetalle() {
  const [products, setProducts] = useState([{}]);
  const [coments, setComents] = useState([{}]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/EugeAF/rcs-JSON-server-zero-waste/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
    fetch(`https://my-json-server.typicode.com/EugeAF/rcs-JSON-server-zero-waste/products/${id}/comments`)
      .then((response) => response.json())
      .then((comentarios) => setComents(comentarios));
  }, []);

  return (
    <div className="container mt-5">
        <h1>{products.title}</h1>
        <div className="row justify-content-center">
            <img className="col-5 mt-3" src={products.img} alt="" />
            <div className="col-4 mt-3">
                <p>{products.description}</p>
                <h3>{products.price}</h3>
                <button type="button" class="btn btn-dark">BUY NOW!</button>
            </div>
        </div>
        <div className="mt-5 row justify-content-center">
          <h3 className="col-10">Comentarios</h3>
          {coments.map((item) => (
            <div className="col-10">
                <ul>
                    <li><p>Email: {item.email}</p></li>
                </ul>
                <p>{item.body}</p>
            </div>
          ))}
        </div>
    </div>
  );
}

export default ProductosDetalle;
