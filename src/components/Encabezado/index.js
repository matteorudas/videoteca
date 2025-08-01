import { Link } from "react-router-dom";
import logo from './logo.png';
import EncabezadoLink from "../EncabezadoLink";
import style from "./encabezado.module.css";

function Encabezado() {
    return (
        <header className={style.encabezado}>
            <Link to="./" >
                <img src={logo} alt="Logo de Videoteca" />
            </Link>
            <nav>
                <EncabezadoLink url='./'>
                    Inicio
                </EncabezadoLink>
                <EncabezadoLink url='./favoritos'>
                    Favoritos
                </EncabezadoLink>
            </nav>
        </header>
    )
}
export default Encabezado;