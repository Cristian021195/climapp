import { IOpenWeatherMapComponent } from "../../Interfaces";

export function Clima({name="San Miguel de Tucumán", lat=0, lon=0, win_speed=0, temperatures=[30,40,20],clouds=0}:IOpenWeatherMapComponent){
    return (
        <>
            <article className="p-1 b-shadow recursos">
                <h2>Clima</h2>
                <h3>{name}</h3>
                <br />
                <ul>
                    <li>latitud: {lat} &emsp;/&emsp; longitud: {lon}, </li>
                    <li>Velocidad del viento: {win_speed} m/s</li>
                    <li>Temperatura: {temperatures[0]}°C, Máxima: {temperatures[1]}°C, Minima: {temperatures[2]}°C</li>
                    <li>Nubosidad: {clouds}%</li>
                </ul>
            </article>
        </>
    )
}
