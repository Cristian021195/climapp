/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef } from "react";
import mapboxgl, { LngLatLike } from "mapbox-gl";
const MAPBOX = import.meta.env.VITE_MAPBOX

mapboxgl.accessToken = MAPBOX;

//asd eslint-disable-next-line import/no-webpack-loader-syntax
//mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

interface ICoordObject{
    coords: LngLatLike
}

export function MapView({coords}:ICoordObject){
    const mapDiv = useRef(null);
    useEffect(() => {
        if (mapDiv.current) {
            const map = new mapboxgl.Map({
              container: mapDiv.current,
              style: "mapbox://styles/mapbox/streets-v11",
              center: coords,
              zoom: 10
            });
        }
    },[coords])
    /*const [map, setMap] = useState(null);
    useEffect(() => {
        if (mapDiv.current && !map) {
          const map = new mapboxgl.Map({
            container: mapDiv.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: coords,
            zoom: 14
          });
          setMap(map);
        }
    }, [mapDiv, map, coords]);*/

    return (
        <div ref={mapDiv} className='-mapa'>
        </div>
    )
}