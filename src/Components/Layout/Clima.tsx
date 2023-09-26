import { IOpenWeatherMapComponent } from "../../Interfaces";

export function Clima({name="San Miguel de Tucumán", lat=0, lon=0, win_speed=0, temperatures=[30,40,20],clouds=0}:IOpenWeatherMapComponent){
    return (
        <>
            <article className="p-1 b-shadow recursos">
                <h2>⛅ Clima</h2>
                <h3>{name}</h3>
                <br />
                <ul>
                    <li><b>📍 latitud:</b> {lat}</li>
                    <li><b>📍 longitud:</b> {lon} </li>
                    <li><b>🚀 Velocidad del viento:</b> {win_speed} m/s</li>
                    <li><b>🌡️ Temperatura:</b>
                    </li>
                        <ul className="list-none" style={{padding:'0 0 0 2rem'}}>
                            <li><b>🟠Media: </b> {temperatures[0]}°C </li>
                            <li><b>🔴Máxima: </b> {temperatures[1]}°C </li>
                            <li><b>🔵Minima: </b> {temperatures[2]}°C </li>
                        </ul>
                    <li><b>⛅ Nubosidad:</b> {clouds}%</li>
                </ul>
            </article>
        </>
    )
}
