/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'
import { debounce } from '../Helpers'
import { datosClimap } from '../Api'
import { IMapbox } from '../Interfaces';
 

interface ISearch {
    input:string,
    selected:string | null,
    results_mapbox: IMapbox | null,
    results_openwmap: unknown
}

interface ISearchState {
    input:string,
    selected:string | null,
    results_mapbox: IMapbox | null,
    results_openwmap: unknown
    changeInput: (val:(string))=>unknown,
    changeSelected: (val:string)=>void,
    getResults: (val:string)=>void,
    getResultsOWM: (val:string)=>void,
}


export const useSearch = create<ISearchState>((set) => ({
    input:"",
    selected: null,
    results_mapbox: null,
    results_openwmap: null,
    changeInput: debounce( async (v:string)=> {
        try {
            const data = await datosClimap(v);
            const jsondata:IMapbox = await data.json();
            set(()=>({results_mapbox: jsondata}))
        } catch (error) {
            console.log(error)
        }
        
        set(()=>({input: v}))

    }, 1500) as ()=>unknown,
    changeSelected: ()=> set((state:ISearch)=>({selected: state.selected})),
    getResults: ()=> set((state:ISearch)=>({results_mapbox: state.results_mapbox})),
    getResultsOWM: ()=> set((state:ISearch)=>({results_openwmap: state.results_openwmap}))
}))