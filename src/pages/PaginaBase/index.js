import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Encabezado from "../../components/Encabezado";
import FavoritosProvider from "../../contextos";
import Piedepagina from "../../components/Piedepagina";

function PaginaBase() {
    return (
        <main>
            <Encabezado />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Piedepagina />
        </main>
    )
}

export default PaginaBase;