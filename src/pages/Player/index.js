import { useParams } from "react-router-dom";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import styles from "./Player.module.css";
import NoEncontrada from "../NoEncontrada";
import { useEffect, useState } from "react";

function Player() {
    const parametros = useParams();
    const [video, setVideo] = useState();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/matteorudas/videoteca-api/videos?id=${parametros.id}`)
        .then(respuesta => respuesta.json())
        .then(datos => {
            setVideo(...datos);
        })
    }, []);

    if (!video) {
        return (
            <NoEncontrada />
        )
    }

    return (
        <>
            <Banner imagen="player" />
            <Titulo>
                <h1>Reproductor de video</h1>
            </Titulo>
            <section className={styles.contenedor}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
            </section>
        </>
    )
}
export default Player;