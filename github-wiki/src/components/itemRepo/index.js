import React from 'react'
import { ItemConatainer } from './styles.js'
 

const Input = ( {repo, handleRemoveRepo} ) => { 

    return (
        <ItemConatainer onClick={handleRemoveRepo}>
            <h3>{ repo.name }</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} className='ver-repo' target="_blank" rel="noreferrer" >Ver Repositório</a>
            <button onClick={() => handleRemoveRepo(repo.id)}>Remover</button>
            <hr />
        </ItemConatainer>
      
    )
}

export default Input;