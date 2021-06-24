
function App() {
  return (
    <div className="wrapper">
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
        <h1>Все кроссовки</h1>
        <div className="sneakers">
          <div className="card">
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
