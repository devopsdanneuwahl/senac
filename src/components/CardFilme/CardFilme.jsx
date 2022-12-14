import { useState } from 'react'
import './CardFilme.css'
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import * as React from 'react';


export function CardFilme({filme}){
    const [favorito, setFavorito] = useState(false)

    function favoritar(){
        setFavorito(!favorito)
    }

    

    return (
        <div className="card">

            {favorito? 
                <BookmarkBorderOutlinedIcon className="favorite" onClick={favoritar}/> : 
                <BookmarkBorderOutlinedIcon className="favorite" onClick={favoritar}/>
            }
            
            <img src={filme.poster} alt="" />
            <span>{filme.titulo}</span>
            <span>{filme.nota}</span>
            <a className="button" href="#">detalhes</a>
            
        </div>


    )


    
}

