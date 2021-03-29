import React from 'react';
import Book from '../../../assets/Books.jpg';
import classes from './Book.module.css';
function LearnMore() {
  return (
    <div className={classes.rectangle}>
      <div className={classes.content}>
        <h1 className={classes.headerOne}>Learn even More!</h1>
        <p className={classes.para}>
          Unlock premium features only for $9.99 per month
        </p>
        <button className={classes.premium}>Go Premium</button>
      </div>
      <div className={classes.image}>
        <img
          src={Book}
          alt=""
          style={{ width: '16vh', height: '16vh', marginTop: '1vh' }}
        />
      </div>
    </div>
  );
}

export default LearnMore;
