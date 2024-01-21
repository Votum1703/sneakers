import React from 'react'
import styles from './Card.module.scss'


function Card({title, imageUrl, price, onFavorite, onPlus}){
    const [isAdded, setIsAdded] = React.useState(false)
   const [isFavorite, setIsFavorite] = React.useState(false)

   const onClickPlus = ()=>{
    onPlus({title, imageUrl, price})
    setIsAdded(!isAdded)
   }

   const onClickFavorite = () =>{
    setIsFavorite(!isFavorite)
   }

   

    return(
        <div class={styles.card}>
        <div className={styles.favorite} onClick= {onClickFavorite}>
        <img src={isFavorite ? "/img/heart-like.svg" : "/img/heart-inlike.svg"} alt="Unliked"/>
        </div>
        <img width={133} height={112} src={imageUrl} alt=""/>
        <h5>{title}</h5>
        <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
            <p>Цена</p>
            <b>{price}</b>
        </div>

            <img 
            className={styles.plus}
            onClick = {onClickPlus}  
            src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus"/>

        </div>
        </div>
    )
}
export default Card



