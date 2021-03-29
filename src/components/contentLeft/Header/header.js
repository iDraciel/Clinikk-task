import React from 'react';
import styles from './header.module.css';
import Hello from '../../../assets/Hello.jpg';

function Header() {
  return (
    <div className={styles.rectangle}>
      <div className={styles.left}>
        <h1 className={styles.headerOne}>Hello Josh!</h1>
        <p className={styles.para}>It's good to see you again</p>
      </div>
      <div>
        <img src={Hello} alt="" className={styles.hello} />
      </div>
    </div>
  );
}

export default Header;
