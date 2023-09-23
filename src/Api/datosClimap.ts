const MAPBOX = import.meta.env.VITE_MAPBOX
export async function datosClimap(lugar:string){
      return fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(lugar)}.json?types=country,locality,place&language=es&access_token=${MAPBOX}`)
}