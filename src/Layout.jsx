import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <Link to="/home">home</Link> 
                <Link to="/insert">insert</Link> 
                <Link to="/display">display</Link> 
                <Link to="/search">search</Link>
                <Link to="/update">update</Link>
                <Link to="/edit" >edit</Link>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;
