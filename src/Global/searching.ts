/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'
import { debounce } from '../Helpers'
import { datosClimap, datosOWM } from '../Api'
import { Feature, IMapbox, IOpenWeatherMap } from '../Interfaces';
 

interface ISearch {
    input:string,
    selected: Feature | null,
    results_mapbox: IMapbox | null,
    results_openwmap: IOpenWeatherMap | null,
    loading: boolean,
    error:string
}

interface ISearchState {
    input:string,
    selected: Feature | null,
    results_mapbox: IMapbox | null,
    results_openwmap: IOpenWeatherMap | null,
    loading: boolean,
    error: string,
    changeInput: (val:(string))=>unknown,
    changeSelected: (f:Feature | undefined)=>void,
    getResults: (val:string)=>void,
    getResultsOWM: (val:IOpenWeatherMap)=>void,
    setError: (val:string)=>void,
    setLoading: (val:boolean)=>void,
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
            if(jsondata){
                const owdata = await datosOWM(jsondata.features[0].center[1], jsondata.features[0].center[0]);
                const owjsondata: IOpenWeatherMap = await owdata.json();
                set(()=>({results_openwmap: owjsondata}))
            }
            set(()=>({results_mapbox: jsondata}))
            set(()=>({selected: jsondata.features[0]}))
        } catch (err: any) {
            set(()=>({error:err?.message}));//console.log(err);
        } finally {
            set(()=>({loading:false}))
        }
        
        set(()=>({input: v}))

    }, 1500) as ()=>unknown,
    changeSelected: (f:Feature | undefined)=> set(()=>({selected: f})),
    getResults: ()=> set((state:ISearch)=>({results_mapbox: state.results_mapbox})),
    getResultsOWM: (val: IOpenWeatherMap)=> set(()=>({results_openwmap: val})),
    setError: (val:string)=> set(()=>({error: val})),
    setLoading: (val:boolean)=>set(()=>({loading:val}))
}))

/*
axios.get('https://api.openweathermap.org/data/2.5/weather', {params:{lat: coords[1], lon:coords[0], appid: PUBLIC_TOKENS.openweather, units:'metric'}})
            .then(res=>{
                setClima(res.data);
                setIsLoading(false);
            }) */