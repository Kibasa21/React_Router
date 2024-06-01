import { NavLink } from "react-router-dom"; //Faz como o Link, mas ele consegue fazer uma função no className, naquele caso eu desestruturei o isActive de um objeto que já vem com o uso do NavLink
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><NavLink to='/' className={({isActive}) => isActive ? classes.active : undefined} end>Home</NavLink></li> {/* Esse end serve para saber quando desativar o NavLink, quando o final do URL não termina com oq ta escrito no "to" */}
                    <li><NavLink to='/products' className={({isActive}) => isActive ? classes.active : undefined}>Products</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}