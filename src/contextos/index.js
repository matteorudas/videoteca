import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);
    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritosContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext);
    function addFavoritos(nuevoFavorito) {
        const favoritoRepetido = favorito.some(fav => fav.id === nuevoFavorito.id);
        let nuevaLista = [...favorito];
        if (!favoritoRepetido) {
            nuevaLista.push(nuevoFavorito);
            return setFavorito(nuevaLista);
        }
        nuevaLista.splice(nuevaLista.indexOf(nuevoFavorito), 1); // splice remueve un elemento del array y indexOf busca el índice del elemento a eliminar
        return setFavorito(nuevaLista);
    }
    return { favorito, addFavoritos };
}