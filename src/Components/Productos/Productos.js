import React,{useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import '../Productos/Productos.css';

function Productos() {

    const [products, setProducts] = useState([{}]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/EugeAF/rcs-JSON-server-zero-waste/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, []);

    return(
        <div>
            <div className="container">
                <div className="row justify-content-around">
                    {products.map((item, index) => (
                        <div class="card col-3 mt-5">
                            <img src={item.img} class="card-img-top mt-2" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{item.title}</h5>
                                <p class="card-text">{item.description}</p>
                                <Link to={`/productos/${products[index].id}`} className="btn btn-dark w-20 mt-2">{item.price}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Productos;