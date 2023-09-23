import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Contacto, Inicio } from "../Pages"
import { PublicHeader } from '../Components/Layout';
import { Buscardor } from "../Components/Forms";
export const PublicRouter = () => {
  return (

    <BrowserRouter>
        <PublicHeader/>
        <Buscardor/>
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="contacto" element={<Contacto/>} />            
        </Routes>
    </BrowserRouter>
    
  )
}
