import { Link, Outlet } from "react-router-dom";
import './layout.css';

const Layout= () =>{
    return(
        <>
        <nav>
            <Link to="/Home">Home</Link>
            <Link to="/Estadisticas">Estadisticas</Link>
            <Link to="/Contacto">Contacto</Link>
        </nav>
        <Outlet/>
        </>
    )
}
export default Layout;
