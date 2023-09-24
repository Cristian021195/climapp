/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useSearch } from "../../Global";
import { Feature } from "../../Interfaces";
//import { debounce } from "../../Helpers";

export const Buscardor = () => {
    const {input, results_mapbox,selected, changeInput} = useSearch((state) => state);
  return (
    <form>
        <div className="d-flex justify-content-center flex-wrap gap-1">
          <input type="text" placeholder="Inserte lugar" className="b-shadow mb-4 mr-4" maxLength={12}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
              changeInput(e.target.value)
              //debounce(changeInput(e.target.value), 500)
              
          }}/>
          <select className="b-shadow mb-4" style={{maxWidth:"80vw"}} onChange={(e:any)=>{console.log(e.target.value)}}
            placeholder="Seleccione una ciudad o pais">
              <option value="" placeholder="Seleccione una ciudad o pais" hidden>Seleccione una opcion</option>
              <optgroup>
                {results_mapbox?.features.map((rm:Feature,rmi:number)=><option value={rm.place_name} key={rmi}>{rm.place_name}</option>)}
              </optgroup>
          </select>
        </div>
        <div className="d-flex justify-content-center flex-wrap gap-1">
          
        </div>
        <p>A:{input}</p>
        <p>A:{}</p>
        <p>A:{selected}</p>
    </form>
  )
}
