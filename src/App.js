import React from "react"
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from './components/pages/Home';
import Favorites from "./components/pages/Favorites";

 

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
async function fetchData(){

  const cartResponse = await axios.get('https://659403d01493b0116069ba63.mockapi.io/cart')
  const favoritesResponse = await axios.get('https://65a96784219bfa37186931df.mockapi.io/favorites')
  const itemsResponse = await axios.get('https://659403d01493b0116069ba63.mockapi.io/items')
  
  
  setCartItems(cartResponse.data);
  setFavorites(favoritesResponse.data);
  setItems(itemsResponse.data);
}
fetchData()
  }, []);

  const onAddToCart = (obj) => {
    console.log(obj);
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://659403d01493b0116069ba63.mockapi.io/cart/${obj.id}`);
      setCartItems(prev => prev.filter(item => Number(item.id) != Number(obj.id)))
    }else{
    axios.post('https://659403d01493b0116069ba63.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
    }

  };

  const onRemoveItem = (id) => {
    axios.delete(`https://659403d01493b0116069ba63.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://65a96784219bfa37186931df.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post('https://65a96784219bfa37186931df.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
          exact
        />
      </Routes>

      <Routes>
        <Route
          path="/favorites"
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite}/>
          }
          exact
        />
      </Routes>
    </div>
  );
}

export default App;




