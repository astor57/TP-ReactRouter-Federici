import { Outlet } from "react-router-dom";
import Nav from './NavBar';

const Layout= () =>{
    return (
        <div className="app-container">
          <Nav />
          <main className="main-content">
            <Outlet />
          </main>
          
        </div>
      );
}
export default Layout;
