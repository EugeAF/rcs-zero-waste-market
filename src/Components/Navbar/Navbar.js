import {Link} from 'react-router-dom';

function Navbar (){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-success">
            <div class="container-fluid">
            <Link class="navbar-brand text-white" to="/">ZeroWaste Market</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link class="nav-link text-white" aria-current="page" to="/productos">Productos</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link text-white" to="/contacto">Contacto</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;