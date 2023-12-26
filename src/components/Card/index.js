import styles from './Card.module.scss'
console.log(styles);

function Card(props){
   
    return(
        <div class={styles.card}>
        <div className={styles.favorite}>
        <img src="/img/heart-inlike.svg" alt="Unliked"/>
        </div>
        <img width={133} height="{112}" src={props.imageUrl} alt=""/>
        <h5>{props.title}</h5>
        <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
            <p>Цена</p>
            <b>{props.price}</b>
        </div>
        <button  className="button" onClick = {props.onClick}>
            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
        </button>
        </div>
        </div>
    )
}
export default Card