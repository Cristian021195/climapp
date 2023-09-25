import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Contacto, Inicio } from "../Pages"
import { Clima, Mapa, PublicHeader } from '../Components/Layout';
import { Buscardor } from "../Components/Forms";
import { useSearch } from "../Global";
export const PublicRouter = () => {
  const {selected} = useSearch((state) => state);
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
        <br />
        <div className="d-flex justify-content-center flex-wrap mx-1 gap-1">
          <Clima/>
          <Mapa place_name={selected?.place_name || "San Miguel de Tucumán"} center={selected?.center || [-65.217590,-26.808285]}/>
        </div>
    </BrowserRouter>
    
  )
}
