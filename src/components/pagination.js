import React from 'react'
import '../style/pagination.css'


const Pagination = ({ gotoNextPage, gotoPreviousPage }) =>{
    return(
        <div className="pagina">

            
                {gotoPreviousPage && <button onClick={gotoPreviousPage}>Voltar</button>}   
                {gotoNextPage && <button onClick={gotoNextPage}>Próximo</button>}
            
            
            
          
        </div>
    )
}

export default Pagination