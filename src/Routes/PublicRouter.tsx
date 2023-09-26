import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Contacto, Inicio } from "../Pages"
import { Clima, Mapa, PublicHeader } from '../Components/Layout';
import { Buscardor } from "../Components/Forms";
import { useSearch } from "../Global";
import { useEffect } from 'react';
import { datosOWM } from "../Api";
import { ErrorBanner } from "../Components/UI";
export const PublicRouter = () => {
  const {selected, results_openwmap,getResultsOWM, setError} = useSearch((state) => state);
  useEffect(()=>{
    datosOWM()
    .then(res=>res.json())
    .then(res=>{
      getResultsOWM(res)
    })
    .catch(err=>{
      console.log(err);
      setError(err.message)
    })
  },[])
  return (

    <BrowserRouter>
        <PublicHeader/>
        <div className="main-s-padre my-1">
          <div className="main-section">
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="contacto" element={<Contacto/>} />            
            </Routes>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-wrap mx-1">
          <Buscardor/>
        </div>
        <div className="d-flex justify-content-center flex-wrap mx-1">
          <ErrorBanner/>
        </div>
        <br />
        <div className="d-flex justify-content-center flex-wrap mx-1 gap-1">
          <Clima win_speed={results_openwmap?.wind.speed || 0} clouds={results_openwmap?.clouds.all || 0} 
          lat={results_openwmap?.coord.lat || -26.808285} lon={results_openwmap?.coord.lon || -65.217590}
          name={results_openwmap?.name || "San Miguel de Tucumán"} 
          temperatures={[results_openwmap?.main.temp || 30, results_openwmap?.main.temp_max || 40, results_openwmap?.main.temp_min || 20]}          />
          <Mapa place_name={selected?.place_name || "San Miguel de Tucumán"} center={selected?.center || [-65.217590,-26.808285]}/>
        </div>
    </BrowserRouter>
    
  )
}