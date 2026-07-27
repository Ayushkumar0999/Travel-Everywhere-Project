import { Link } from "react-router-dom";

export function TravelEverywhereHome(){

    return(
    <div>
        <header className=" bg-dark text-white p-2">
        <h1 className=" text-center"> <Link to="/" className=" btn btn-dark btn-lg"> Travel Everywhere</Link> </h1>
      </header>

        <div style={{ height: '500px' }} className="d-flex justify-content-center align-items-center">
        
                    <div>
                        <div>
                            <Link to="/user-login" className="btn btn-warning"> User Login  </Link>
                            <Link to="/admin-login" className="btn btn-dark mx-2"> Admin Login  </Link>
                        </div>
                        <div className="text-center mt-2">
                            <Link to="/user-register"> New User? </Link>
                        </div>
                    </div>
        
                </div>
                </div>
    )
}