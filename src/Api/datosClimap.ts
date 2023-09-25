const MAPBOX = import.meta.env.VITE_MAPBOX
const OPWMAP = import.meta.env.VITE_OPENWEATHER
export async function datosClimap(lugar:string){
      return fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(lugar)}.json?types=country,locality,place&language=es&access_token=${MAPBOX}`)
}

export async function datosOWM(lat:number=-26.808285, lon:number=-65.217590, units:string = 'metric') {
      return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPWMAP}&units=${units}`);
}
/**
 * https://api.openweathermap.org/data/2.5/weather?lat=37.336191&lon=-121.890583&appid=5d895cc1600abe918265bc31831d467f&units=metric
 * axios.get('https://api.openweathermap.org/data/2.5/weather', {params:{lat: coords[1], lon:coords[0], appid: PUBLIC_TOKENS.openweather, units:'metric'}})
            .then(res=>{
                setClima(res.data);
                setIsLoading(false);
            }), 
 */