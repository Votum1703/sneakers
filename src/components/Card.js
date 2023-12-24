function Card(){
    return(
        <div class="card">
        <div className="favorite">
        <img src="/img/heart-inlike.svg" alt="Unliked"/>
        </div>
        <img width={133} height="{112}" src="/img/sneakers/1.jpg" alt=""/>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
            <p>Цена</p>
            <b>12 999 руб.</b>
        </div>
        <button  className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
        </button>
        </div>
        </div>
    )
}
export default Card