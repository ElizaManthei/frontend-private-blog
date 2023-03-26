import { NavLink} from "react-router-dom";

export default function Navigation({isAuthenticatedAtr, toggleIsAuthenticatedAtr}) {

    if(isAuthenticatedAtr) {
    return (
        <nav>
            <ul className = "nav">
                <li>
                    <NavLink
                        className = {({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to = "/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className = {({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to = "/Overzicht">
                        Blog overzicht
                    </NavLink>
                </li>
                <li onClick = {() => toggleIsAuthenticatedAtr(false)}>
                    <NavLink
                        className =  'default-menu-link'
                        to = "/">
                        Uitlogen
                    </NavLink>
                </li>
            </ul>
        </nav>
    )} else
        return(
        <ul className = "nav">
            <li>
                <NavLink
                    className = {({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    to = "/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className = {({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    to = "/Login">
                    Login
            </NavLink>
            </li>
        </ul>
)}