import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';
import React from 'react';
 
const arr = [
  {
    title: 'Мужские кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imgUrl: '/img/sneakers/1.jpg'
  },
  {
    title: 'Мужские кроссовки Nike Air Max 270',
    price: 14999,
    imgUrl: '/img/sneakers/2.jpg'
  },
  {
    title: 'Мужские кроссовки Nike Blazer Mid Suede',
    price: 8499,
    imgUrl: '/img/sneakers/3.jpg'
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imgUrl: '/img/sneakers/4.jpg'
  }
];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <div className="wrapper">
      {cartOpened ? <Cart onClickCart={() => {setCartOpened(false)}}/> : null}

      <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content">
        <div className="contentHeader">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="/img/search.svg" alt="Поиск"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
  
        <div className="sneakers">
          {arr.map((obj) => (
            <Card
            title={obj.title}
            price={obj.price}
            imgUrl={obj.imgUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
