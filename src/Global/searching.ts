/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'
import { debounce } from '../Helpers'
import { datosClimap } from '../Api'
import { Feature, IMapbox } from '../Interfaces';
 

interface ISearch {
    input:string,
    selected: Feature | null,
    results_mapbox: IMapbox | null,
    results_openwmap: unknown,
    loading: boolean,
    error:string
}

interface ISearchState {
    input:string,
    selected: Feature | null,
    results_mapbox: IMapbox | null,
    results_openwmap: unknown,
    loading: boolean,
    error: string,
    changeInput: (val:(string))=>unknown,
    changeSelected: (f:Feature | undefined)=>void,
    getResults: (val:string)=>void,
    getResultsOWM: (val:string)=>void,
}


export const useSearch = create<ISearchState>((set) => ({
    input:"",
    selected: null,
    results_mapbox: null,
    results_openwmap: null,
    loading:false,
    error:"",
    changeInput: debounce( async (v:string)=> {
        try {
            set(()=>({loading:true}))
            const data = await datosClimap(v);
            //throw new Error("Nani?");
            const jsondata:IMapbox = await data.json();
            set(()=>({results_mapbox: jsondata}))
            set(()=>({selected: jsondata.features[0]}))
        } catch (err: any) {
            set(()=>({error:err?.message}))
            //console.log(err);
        } finally {
            set(()=>({loading:false}))
        }
        
        set(()=>({input: v}))

    }, 1500) as ()=>unknown,
    changeSelected: (f:Feature | undefined)=> set(()=>({selected: f})),
    getResults: ()=> set((state:ISearch)=>({results_mapbox: state.results_mapbox})),
    getResultsOWM: ()=> set((state:ISearch)=>({results_openwmap: state.results_openwmap}))
}))