import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
      <Route index element={<Home/>}/>
      <Route path="Home" element={<Home/>}/>
      <Route path="Insert" element={<Insert/>}/>
      <Route path="Display" element={<Display/>}/>
        
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}
export default App;