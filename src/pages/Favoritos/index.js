import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Titulo from '../../components/Titulo';
import { useFavoritosContext } from '../../contextos';
import styles from './Favoritos.module.css';

function Favoritos() {
    const { favorito } = useFavoritosContext();
    return (
        <>
            <Banner imagen="favoritos" />
            <Titulo>
                <h1>Estos son tus videos favoritos</h1>
            </Titulo>
            <section className={styles.contenedor}>
                {favorito.map((fav) => {
                    return (
                        <Card {...fav} key={fav.id} />
                    )
                })}
            </section>
        </>
    )
}
export default Favoritos;