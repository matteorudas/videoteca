import styles from './Banner.module.css';

function Banner({ imagen }) {
    return (
        <div className={styles.capa} style={{ backgroundImage: `url('/imagenes/banner-${imagen}.png')` }} ></div>
    )
}

export default Banner;