/*import React, { useState, useEffect, useContext } from 'react';
import styles from "./Search.module.css";
import { JuegoContext } from '../../Context/JuegoContext';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../const/routes.js';
function Search() {


  const navigate = useNavigate();
  const {onInputChange, valueSearch, onResetForm, Juegos} = useContext(JuegoContext);
  
  const [searchResults, setSearchResults] = useState([]);


  const searcher = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    setSearchResults(
      Juegos.filter((juego) => juego.nombre.toLowerCase().includes(searchTerm))
    );
  };

  const onSearchSubmit = e => {
    e.preventDefault()
    navigate(ROUTES.search, {
      state: valueSearch,
    });

  } 

  console.log(onInputChange)




  return (
    <div>
      <form onSubmit={onSearchSubmit}>
      <input
        className={styles.LLENAR} 
        id=''
        name='valueSearch'
        value={valueSearch}
        onChange={onInputChange}
        type='search'
        placeholder="Buscar juego por nombre o género."
      />
      <button >Buscar</button>
      </form>
    </div>
  );
}

export default Search;*/

import React, { useState, useEffect, useContext } from "react";
import styles from "./Search.module.css";
import { JuegoContext } from "../../Context/JuegoContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes.js";
import List from "../List/List.jsx";

function Search() {
  const navigate = useNavigate();
  const { onInputChange, valueSearch, onResetForm, Juegos } =
    useContext(JuegoContext);
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    onInputChange(event);

    const results = Juegos.filter((juego) =>
      juego.nombre.toLowerCase().includes(value.toLowerCase())
    );
    console.log(value);
    setSearchResults(results);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(ROUTES.search, { state: valueSearch });
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <div className="">

        
        <input
          className={styles.LLENAR}
          id=""
          name="valueSearch"
          value={valueSearch}
          onChange={handleChange}
          type="search"
          placeholder="Buscar juego por nombre o género."
        />
        </div>
        <button>Buscar</button>
      </form>
      {valueSearch !== '' && (
        <List Juegos={searchResults}/>
)}
    </div>
  );
}

export default Search;
