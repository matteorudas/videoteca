import styles from './Card.module.css';
import iconoNoFav from '../Card/favorite_outline.png';
import iconoFav from '../Card/favorite.png';
import { useFavoritosContext } from '../../contextos';
import { Link } from 'react-router-dom';

function Card({ id, capa, titulo }) {
    const { favorito, addFavoritos } = useFavoritosContext();
    const esFavorito = favorito.some((fav) => fav.id === id);
    const icono = esFavorito ? iconoFav : iconoNoFav;
    return (
        <div className={styles.contenedor}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icono} alt="Fav video" className={styles.favorito}
                onClick={() => {
                    addFavoritos({ id, titulo, capa })
                }} />
        </div>
    )
}
export default Card;