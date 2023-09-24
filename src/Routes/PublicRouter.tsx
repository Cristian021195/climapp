import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Contacto, Inicio } from "../Pages"
import { PublicHeader } from '../Components/Layout';
import { Buscardor } from "../Components/Forms";
export const PublicRouter = () => {
  return (

    <BrowserRouter>
        <PublicHeader/>
        <div className="d-flex justify-content-center flex-wrap mx-1">
          <Buscardor/>
        </div>
        <div className="d-flex justify-content-center flex-wrap mx-1">
          <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="contacto" element={<Contacto/>} />            
          </Routes>
        </div>
    </BrowserRouter>
    
  )
}
