//import { ElementA, ElementB } from '../Components/UI/';

export const Inicio = () => {
  return (
      <div className='fade'>
      <h1 className='titulo'>Inicio</h1>
      <p>Climap es una app sencilla para consultar clima y ubicacion geografica.</p>
      <p>Es solo para propositos de practicas de las siguientes tecnologias y tecnicas:</p>
      <ul style={{listStyle:'inside', width:'10rem', margin:'0 auto'}}>
        <li>React JS</li>
        <li>TypeScript</li>
        <li>React Router</li>
        <li>Zustand</li>
        <li>Openwheathermap API + Mapbox API</li>
        <li>Debounced Fetch</li>
      </ul>      
    </div>
  )
}
