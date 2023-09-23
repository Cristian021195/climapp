import { NavLink } from "react-router-dom"

export function PublicHeader(){
    return (
        <header>
            <nav>
                <ul className='d-flex-centered'>
                    <li id="inicio">
                        <NavLink to={'/'} className={({isActive})=> isActive ? 'nav-link link-activo' : 'nav-link'}>Inicio</NavLink>
                    </li>
                    <li id="contacto">
                        <NavLink to={'contacto'} className={({isActive})=> isActive ? 'nav-link link-activo' : 'nav-link'}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}