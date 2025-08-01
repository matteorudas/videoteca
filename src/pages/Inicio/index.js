import { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Titulo from '../../components/Titulo';
import styles from './Inicio.module.css';
function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/matteorudas/videoteca-api/videos')
            .then(respuesta => respuesta.json())
            .then(datos => {
                setVideos(datos);
            })
    }, [])
    
    return (
        <>
            <Banner imagen="home" />
            <Titulo>
                <h1>Un lugar en donde puedes tener tus videos y peliculas</h1>
            </Titulo>
            <section className={styles.contenedor}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Inicio;