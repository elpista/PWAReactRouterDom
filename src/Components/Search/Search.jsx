import React, { useState, useEffect } from 'react';
import styles from "./Search.module.css";

function Search({ Juegos, setSearchResults}) {
  const [search, setSearch] = useState(""); // Cambié el nombre del estado a 'searchTerm'


  const searcher = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm); // Actualizo el estado 'searchTerm'
    setSearchResults(
      Juegos.filter((juego) => juego.nombre.toLowerCase().includes(searchTerm))
    );
  };



  return (
    <input
      className={styles.LLENAR}
      value={search} // Usamos el estado 'searchTerm' en lugar de 'search'
      onChange={searcher}
      type="text"
      placeholder="Buscar juego por nombre o género."
    />
  );
}

export default Search;