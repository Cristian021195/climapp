/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useSearch } from "../../Global";
import { Feature } from "../../Interfaces";
import { SpinnerLoader } from "../UI";
//import { Mapa } from "../Layout";
//import { debounce } from "../../Helpers";

export const Buscardor = () => {
  const {results_mapbox, loading, error, changeInput, changeSelected} = useSearch((state) => state);
  return (
    <form>
        <div className="d-flex justify-content-center flex-wrap gap-1">
          <input type="text" placeholder="Inserte lugar" className="b-shadow mb-4 input-map" maxLength={12}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
              changeInput(e.target.value);              
          }}/>
          <div className="d-flex align-items-center">
            {loading && <SpinnerLoader color="dodgerblue" width="2" height="2"/>}
          </div>
          <select className="b-shadow mb-4 input-map" onChange={(e:any)=>{
            const feature:Feature | undefined = results_mapbox?.features.find((f:Feature)=>f.id === e.target.value);
            //console.log(feature);
            changeSelected(feature);
          }}
            placeholder="Seleccione una ciudad o pais">
              <option value="" placeholder="Seleccione una ciudad o pais" hidden>Seleccione una opcion</option>
              <optgroup>
                {results_mapbox?.features.map((rm:Feature,rmi:number)=>{
                  return <option value={rm.id} key={rmi}>{rm.place_name}</option>
                })}
              </optgroup>
          </select>
        </div>
        <div className="d-flex align-items-center my-1">
            {error.length > 0 && <div className="p-1 br-1" style={{backgroundColor:'#ff5454', color:'white', width:'100%'}}><b>¡Error!: </b>{error}</div>}
        </div>
    </form>
  )
}
