import React from "react";
import styles from './Card.module.scss';

function Card(props) {
    return(
        <div className={styles.card}>
            <div className={styles.cardFavourite}>
              <img src="/img/heart-unliked.svg" alt="Unlike"/> 
            </div>
            <img width={133} height={112} src={props.imgUrl} alt="Sneakers"/>
            <h5>{props.title}</h5>
            <div className={styles.cardBottom}>
              <div>
                <p>Цена:</p>
                <b>{props.price} руб.</b>
              </div>
              <button onClick={props.onClick}>
                <img width={11} height={11} src="/img/plus.svg" alt="+"/>
              </button>
            </div>
          </div>
    );
}
export default Card;