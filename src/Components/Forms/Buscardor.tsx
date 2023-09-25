/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useSearch } from "../../Global";
import { Feature } from "../../Interfaces";
import { Check, SpinnerLoader } from "../UI";
import { datosOWM } from "../../Api";
//import { datosOWM } from "../../Api";
//import { Mapa } from "../Layout";
//import { debounce } from "../../Helpers";

export const Buscardor = () => {
  const {results_mapbox, loading, changeInput, changeSelected, getResultsOWM, setLoading} = useSearch((state) => state);
  return (
    <form> 
        <div className="d-flex justify-content-center flex-wrap gap-1">
          <input type="text" placeholder="Inserte lugar" className="b-shadow mb-4 input-map" maxLength={12}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
              changeInput(e.target.value);              
          }}/>
          <select className="b-shadow mb-4 input-map" onChange={(e:any)=>{
            const feature:Feature | undefined = results_mapbox?.features.find((f:Feature)=>f.id === e.target.value);
            if(feature != undefined || feature != null){
              setLoading(true);
              changeSelected(feature); //[ -65.217590 ln, -26.808285 la];
              datosOWM(feature.center[1], feature.center[0]).then(res=>res.json())
              .then(res=>{getResultsOWM(res)})
              .catch(err=>{console.log(err)})
              .finally(()=>{setLoading(false);})
            }
          }}
            placeholder="Seleccione una ciudad o pais">
              <option value="" placeholder="Seleccione una ciudad o pais" hidden>Seleccione una opcion</option>
              <optgroup>
                {results_mapbox?.features.map((rm:Feature,rmi:number)=>{
                  return <option value={rm.id} key={rmi}>{rm.place_name}</option>
                })}
              </optgroup>
          </select>
          <div className="d-flex align-items-center">
            {loading ? <SpinnerLoader color="dodgerblue" width="2" height="2"/> : <Check width="2" height="2" color="#21D179"/>}
          </div>
        </div>
    </form>
  )
}
