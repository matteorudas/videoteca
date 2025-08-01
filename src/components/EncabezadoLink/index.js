import { Link } from "react-router-dom";
import styles from "./encabezadoLink.module.css";

function EncabezadoLink({url, children}) {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )  
}
export default EncabezadoLink;