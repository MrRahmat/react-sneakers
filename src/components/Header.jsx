function Header(params){
    return(
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
    );
}
export default Header;