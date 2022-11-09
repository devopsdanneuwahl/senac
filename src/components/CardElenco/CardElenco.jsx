import './CardElenco.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';

// export function CardElenco({ator}){
//     const [ likes, setLikes ] = useState(0)
    
//     function like(){
//         setLikes(likes + 1)
//     }

export function CardElenco({ator}){
    const [counter, setCounter] = useState(0);

 //increase counter
 const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };
 
  //reset counter 
  const reset = () =>{
    setCounter(0)
  }
   
  
        return (
        <div className="cardElenco">
            <img src={ator.foto} />
            <span className="ator">{ator.nome}</span>
            <span className="valor">{ator.valor}</span>
            
        {/* <AddCircleOutlineIcon className="like" onClick={like} />
       
        <span className='spanl'>{likes}</span> */}
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn" onClick={decrease}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
        <span className="counter__output">{counter}</span>
               <a className="button" href="#">comprar</a>
        </div>

    )
}