import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';
import React from 'react';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState();
  const [cartOpened, setCartOpened] = React.useState(false);

  

  //Подгрузка данных с бэкенда(mockAPI)
  React.useEffect(() => {
    fetch('https://60db38c8801dcb0017290fb1.mockapi.io/sneakers')
    .then( (res) => {
      return res.json();
    })
    .then(json => {
      setItems(json)
    });
  }, []);

  const onAddToCard = ((obj) => {
      setCartItems(prev => [...prev, obj]);
  });

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper">
      {cartOpened && <Cart items={cartItems} onClose={() => {setCartOpened(false)}}/>}

      <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content">
        <div className="contentHeader">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : `Все кроссовки`}</h1>
          <div className="searchBlock">
            <img src="/img/search.svg" alt="Поиск"/>
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
          </div>
        </div>
  
        <div className="sneakers">
          {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj, index) => (
            <Card
            key={obj + index}
            title={obj.title}
            price={obj.price}
            imgUrl={obj.imgUrl}
            onPlus={onAddToCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
