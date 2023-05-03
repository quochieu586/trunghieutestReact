import { NavLink,Outlet } from "react-router-dom";
import './Router.scss';

const Layout = () => {
    return(
        <>
            <nav>
                <ul>
                    <div className = "topnav">
                        <NavLink to="/" activeClassName='active' exact={true}>
                            Home
                        </NavLink>
                        <NavLink to="/test" activeClassName='active'>
                            Test
                        </NavLink>
                        <NavLink to="/todo" activeClassName='active'>
                            ToDo App
                        </NavLink>    
                    </div>
                </ul>
                <Outlet/>
            </nav>
        </>
    )
}

export default Layout; 