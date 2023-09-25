
import { IFeatureMapComponent } from "../../Interfaces";
import { MapView } from "../UI";

export function Mapa({place_name, center}:IFeatureMapComponent){
    const lugar = place_name ? place_name : '';
    const coords = center ? center : [-65.217590,-26.808285];
    return (
        <>
            <article className={`p-1 b-shadow recursos`}>
                <h2>Seccion mapa</h2>
                <h3>{lugar}</h3>
                <br />
                <MapView coords={coords}/>
            </article>
        </>
    )
}