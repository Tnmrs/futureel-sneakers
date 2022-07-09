import styles from './Card.module.scss';
import React from 'react';

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const [isLike, setIsLike] = React.useState(false);

  const handle = () => {
    setIsAdded(!isAdded);
  };

  const select = () => {
    setIsLike(!isLike);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={select}>
        <img src={isLike ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'} alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <img
          className={styles.plus}
          onClick={handle}
          src={isAdded ? '/img/btn-checked.svg' : '/img/plus.svg'}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
