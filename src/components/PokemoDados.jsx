import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../style/pokedados.css'

function PokemoDados({
  match: {
    params: { id }
  }
}) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false)
 

  useEffect(() => {
    async function buscarDados() {
      setIsLoading(true);
      const result = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
      console.log(result);
      setData(result.data);
      setIsLoading(false);
    }
    buscarDados();
  }, [id]);




  if (isLoading || !data.sprites) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <div className="card">
        <h1>Id: {id}</h1>
        <div className="img-container">
          <img className="imagem" src={data.sprites.front_default} alt={data.name} />
        </div>
        <Link to="/">Voltar</Link>
      </div>
    </div>
  );
}

export default PokemoDados;
