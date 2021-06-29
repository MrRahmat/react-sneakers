import React from "react";
import styles from './Card.module.scss';

function Card({title, price, imgUrl, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onAddCart = () => {
    onPlus({title, price, imgUrl});
    setIsAdded(!isAdded);
  }

  const [isLiked, setIsLiked] = React.useState(false);
  const onLike = () => {
    setIsLiked(!isLiked);
  }

    return(
        <div className={styles.card}>
            <div className={styles.cardFavourite}>
              <img onClick={onLike} src={isLiked ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Unlike"/> 
            </div>
            <img width={133} height={112} src={imgUrl} alt="Sneakers"/>
            <h5>{title}</h5>
            <div className={styles.cardBottom}>
              <div>
                <p>Цена:</p>
                <b>{price} руб.</b>
              </div>
              <img onClick={onAddCart} style={{cursor: "pointer"}} src={isAdded ? "img/btn-checked.svg" : "/img/btn-plus.svg"} alt="+"/>
              
            </div>
          </div>
    );
}
export default Card;