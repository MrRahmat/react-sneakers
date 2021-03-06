function Cart({onClose, items=[] }) {
    return(
        <div className="cartOverlay">
            <div className="cart">
                <h2>Корзина <img onClick={onClose} className="cartItemBtn" src="/img/btn-remove.svg" alt="Remove" /></h2>
                <div className="cartItems">
                    {items.map((obj) => (
                        <div className="cartItem">
                            <div style={{backgroundImage: `url(${obj.imageUrl})`}}className="cartItemImg">
                            </div>
                            <div className="cartItem__text">
                                <p>{obj.title}</p>
                                <b>{obj.price} руб.</b>
                            </div>
                            <img className="cartItemBtn" src="/img/btn-remove.svg" alt="Remove" />
                        </div>
                    ))}
                </div>
                <div className="cartBottom">
                    <ul>
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>21 498 руб.</b>
                    </li>
                    <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
                </div>   
            </div>
        </div>

    );
}

export default Cart;