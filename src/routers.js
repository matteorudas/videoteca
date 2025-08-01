import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";
import Player from "./pages/Player";
import NoEncontrada from "./pages/NoEncontrada";
import PaginaBase from "./pages/PaginaBase";

function AppRouters() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route path="favoritos" element={<Favoritos />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<NoEncontrada />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouters;