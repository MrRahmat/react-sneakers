import React from "react";

function Card(props) {
    return(
        <div className="card">
            <div className="cardFavourite">
              <img src="/img/heart-unliked.svg" alt="Unlike"/> 
            </div>
            <img width={133} height={112} src={props.imgUrl} alt="Sneakers"/>
            <h5>{props.title}</h5>
            <div className="cardBottom">
              <div className="cardCost">
                <p>Цена:</p>
                <b>{props.price} руб.</b>
              </div>
              <button className="cardBtn">
                <img width={11} height={11} src="/img/plus.svg" alt="+"/>
              </button>
            </div>
          </div>
    );
}
export default Card;