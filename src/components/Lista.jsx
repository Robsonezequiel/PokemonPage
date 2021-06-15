import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from './pagination'
import '../style/Lista.css'



function Lista() {

  const [data, setData] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [previousPageUrl, setPreviousPageUrl] = useState(null)
  const [nextPageUrl, setNextPageUrl] = useState(0)
  const [loading,setLoading] = useState(true)
  
  
  useEffect(() => {
    setLoading(true)
    async function buscarDados() {
      const result = await axios(currentPageUrl);
      setLoading(false)
      console.log(result);
      setData(result.data.results)
      setNextPageUrl(result.data.next)
      setPreviousPageUrl(result.data.previous)
      
      
      }
buscarDados();
  },[currentPageUrl]);

  function gotoNextPage(){
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPreviousPage(){
    setCurrentPageUrl(previousPageUrl)
  }

  if(loading) return "Carregando..."



 if (!data) {
    return <div />;
  }
  return (
    
    <div className="container">
      <img src="https://cdn.mos.cms.futurecdn.net/nJqzZf3iyhawJfofUMicFV-1200-80.jpg" alt="Logo pokemon " className="logo" />
        <ul className="list">
        {data.map(data => (
          <li key={data.name} className="list-item">
            <Link to={data.name}>{data.name}</Link>
          </li>
          ))}
       </ul>
          <Pagination className="botao"
          gotoNextPage={gotoNextPage? gotoNextPage: null}
          gotoPreviousPage={gotoPreviousPage? gotoPreviousPage: null} />
     

    </div>
    
    );
}


export default Lista;