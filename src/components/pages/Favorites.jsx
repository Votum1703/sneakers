
function Favorites () {

    return(
        <div class="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
         <h1>{searchValue ? `"Поиск по запросу: ${searchValue}"`: "Все кроссовки"}</h1>
         <div className="search-block d-flex">
           <img src="/img/search.svg" alt="Search"/>
           {searchValue && <img onClick={() => setsearchValue ("")} className="clear cu-p" src="/img/btn-remove.svg" alt="Clear"/>}
           <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
         </div>
        </div>
 <div className="d-flex flex-wrap">
Тут закладки
 </div>
 </div>
    )
}

export default Favorites