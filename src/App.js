import React from "react"
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from './components/pages/Home';

 

 

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setsearchValue] = React.useState("")
  const [cartOpened, setCartOpened] = React.useState(false)

React.useEffect(()=>{
  axios.get('https://659403d01493b0116069ba63.mockapi.io/items').then(res =>{
  setItems(res.data);
});
axios.get('https://659403d01493b0116069ba63.mockapi.io/cart').then(res =>{
  setCartItems(res.data);
});
}, [])




const onAddToCart = (obj) => {
  axios.post("https://659403d01493b0116069ba63.mockapi.io/cart", obj).then(res =>setCartItems(prev => [...prev, res.data])) 
};




const onRemoveItem = (id) =>{
  axios.delete(`https://659403d01493b0116069ba63.mockapi.io/cart/${id}`);
  setCartItems((prev) => prev.filter((item) => item.id != id));
};

const onAddToFavorite = (obj) => {
  axios.post("https://65a96784219bfa37186931df.mockapi.io/favorites", obj);
  setFavorites((prev) => [...prev, obj])
};


const onChangeSearchInput = (event) => {
  setsearchValue(event.target.value);
};


  return (
     <div className="wrapper clear">
{cartOpened && <Drawer items={cartItems} onClose = {() => setCartOpened(false)} onRemove={onRemoveItem} />}
<Header onClickCart = {() => setCartOpened(true)} />

<Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setsearchValue={setsearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
          exact
        />
      </Routes>


</div>


  );
}

export default App;




