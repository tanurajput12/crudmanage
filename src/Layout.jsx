import { Link,Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
const Layout=()=>{
    return(
        <>
        <Link to={Home}>home</Link>
        <Link to={Insert}>insert</Link>
        <Link to={Display}>display</Link>
        

        <Outlet/>
       
        </>
    )
}
export default Layout;