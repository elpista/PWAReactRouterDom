import { createContext, useState, useEffect } from "react";
import { JuegoContext } from "./JuegoContext";
import { useForm } from "./../Hook/useForm.js";






export const JuegoProvider = ({ children }) => {

    const [Juegos, setJuegos] = useState([])

    const { valueSearch, onInputChange, onResetForm } = useForm({
		valueSearch: '',
	});


    const fetchJuegos = async () => {
        const response = await fetch("/mocks/Juegos.json");
        const result = await response.json();
        setJuegos(result);
    }

    useEffect(() => {
        fetchJuegos();
    }, [])

  return (
  <JuegoContext.Provider value={{
    Juegos,
    valueSearch,
    onInputChange,
    onResetForm
  }}>
        {children}
    </JuegoContext.Provider>
    );
};
