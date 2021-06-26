import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';
 
function App() {
  return (
    <div className="wrapper">
      <Cart/>

      <Header/>
      <div className="content">
        <div className="contentHeader">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="/img/search.svg" alt="Поиск"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
  
        <div className="sneakers">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
