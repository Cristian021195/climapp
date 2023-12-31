/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef } from "react";
import mapboxgl, { LngLatLike } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const MAPBOX = import.meta.env.VITE_MAPBOX

mapboxgl.accessToken = MAPBOX;

//asd eslint-disable-next-line import/no-webpack-loader-syntax
//mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

interface ICoordObject{
    coords: number[]
}

export function MapView({coords}:ICoordObject){
    const mapDiv = useRef(null);
    useEffect(() => {
        if (mapDiv.current) {
            new mapboxgl.Map({
              container: mapDiv.current,
              style: "mapbox://styles/mapbox/outdoors-v12",
              center: coords as LngLatLike,
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