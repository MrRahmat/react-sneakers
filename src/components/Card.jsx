import React from "react";

function Card(params) {
    return(
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
    );
}
export default Card;