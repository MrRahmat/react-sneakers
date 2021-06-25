
function App() {
  return (
    <div className="wrapper">
      <div className="cartOverlay">
        <div className="cart">
          <h2>Корзина</h2>
          <div className="cartItem">
            <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}}className="cartItemImg">

            </div>
            <div className="cartItem__text">
              <p>Мужские кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="cartItemBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem">
            <div style={{backgroundImage: 'url(/img/sneakers/2.jpg)'}}className="cartItemImg">

            </div>
            <div className="cartItem__text">
              <p>Мужские кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="cartItemBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>
      </div>


      <header>
        <div className="headerLeft">
          <img className="headerLogo" src="/img/logo.png" alt="Логотип"/>
          <div> 
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        
          <ul className="headerRight">
            <li>
            <img width={18} height={18} src="/img/cart.svg" alt="Корзина"/>
              <span>1205 руб.</span>
            </li>
            <li>
            <img width={18} height={18} src="/img/user.svg" alt="Пользователь"/>
            </li>
          </ul>
      </header>
      <div className="content">
        <div className="contentHeader">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="/img/search.svg" alt="Поиск"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
  
        <div className="sneakers">
          <div className="card">
            <div className="cardFavourite">
              <img src="/img/heart-unliked.svg" alt="Unlike"/> 
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardCost">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="cardBtn">
                <img width={11} height={11} src="/img/plus.svg" alt="+"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers"/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardCost">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="cardBtn">
                <img width={11} height={11} src="/img/plus.svg" alt="+"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers"/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardCost">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="cardBtn">
                <img width={11} height={11} src="/img/plus.svg" alt="+"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers"/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardCost">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="cardBtn">
                <img width={11} height={11} src="/img/plus.svg" alt="+"/>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/5.jpg" alt="Sneakers"/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardCost">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="cardBtn">
                <img width={11} height={11} src="/img/plus.svg" alt="+"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
