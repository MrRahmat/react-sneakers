import styles from './Header.module.scss';

function Header(props){
    return(
        <header>
            <div className={styles.headerLeft}>
                <img src="/img/logo.png" alt="Логотип"/>
                <div> 
                    <h3>React Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            
            <ul className={styles.headerRight}>
                <li onClick={props.onClickCart}>
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