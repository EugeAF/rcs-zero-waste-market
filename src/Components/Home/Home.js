import {Link} from 'react-router-dom';
import '../Home/Home.css';

function Home() {
    return(
        <div className="p-5 bg-light fondo">
            <div className="container-fluid py-5 d-flex justify-content-center flex-column align-items-center">
                <h1 className="fw-bold">Zero Waste Market</h1>
                <p className="fs-4 col-6 ">Are you looking to take care of the environment? Do you believe in sustainable products? It is your time to try the natural!</p>
                <Link to="/productos" className="btn btn-success btn-lg">BUY NOW!</Link>               
            </div>
        </div>
    )
}

export default Home;