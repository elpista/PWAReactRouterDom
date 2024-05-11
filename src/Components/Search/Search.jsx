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
import { JuegoContext } from "../../Context/JuegoContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes.js";
import List from "../List/List.jsx";
import Button from "../Button/Button.jsx";

function Search() {
  const navigate = useNavigate();
  const { onInputChange, valueSearch, onResetForm, Juegos } = useContext(
    JuegoContext
  );
  const [searchResults, setSearchResults] = useState([]);
  const [showList, setShowList] = useState(false);
  const [inputPosition, setInputPosition] = useState({ x: 0, y: 0 });

  const handleChange = (event) => {
    const { value } = event.target;
    onInputChange(event);

    const results = Juegos.filter((juego) =>
      juego.nombre.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
    setShowList(value.trim() !== "" && results.length > 0);
    
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(ROUTES.search, { state: valueSearch });
    onResetForm()
    setShowList(false)

  };

  const handleInputFocus = (event) => {
    const inputRect = event.target.getBoundingClientRect();
    setInputPosition({ x: inputRect.left, y: inputRect.bottom });


  };

  return (
    <div className="relative w-4/12 ml-64">
      <form className="flex" onSubmit={handleSearchSubmit}>
        <input
          className="w-full px-3 py-2 border focus:outline-none text-black"
          name="valueSearch"
          value={valueSearch}
          onChange={handleChange}
          onFocus={handleInputFocus}
          type="search"
          placeholder="Buscar juego por nombre o género."
          autoComplete="off"
        />
        <Button text="Buscar" className="text-xs" />
      </form>
      {showList && (
        <List
          Juegos={searchResults}

        />
      )}
    </div>
  );
}

export default Search;