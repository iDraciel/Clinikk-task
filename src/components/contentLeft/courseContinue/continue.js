import React from 'react';
import classes from './continue.module.css';
import Spanish from '../../../assets/spanish-flag.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Continue() {
  return (
    <div className={classes.contentLeft}>
      <div className={classes.rectangle}>
        <div className={classes.image}>
          <img
            src={Spanish}
            alt=" "
            style={{ width: '6vh', marginLeft: '1vh', height: '6vh' }}
          />
        </div>
        <div className={classes.text}>
          <h2 className={classes.headerOne}>Spanish B2</h2>
          <p className={classes.para}>by Alejandro Velazquez</p>
        </div>
        <div>
          <div className={classes.bar} style={{ width: 35, height: 35 }}>
            <CircularProgressbar
              value={83}
              text={`83%`}
              styles={buildStyles({
                textColor: 'black',
                pathColor: 'black',
              })}
            />
          </div>
        </div>
        <div className={classes.continue}>
          <button className={classes.onContinue}>Continue</button>
        </div>
      </div>
      <div className={classes.arrowLeft}>
        <FontAwesomeIcon
          style={{ marginTop: '1.5vh', marginLeft: '1.6vh' }}
          icon={faArrowLeft}
        />
      </div>
      <div className={classes.arrowRight}>
        <FontAwesomeIcon
          style={{ marginTop: '1.5vh', marginLeft: '1.6vh' }}
          icon={faArrowRight}
        />
      </div>
      <div></div>
    </div>
  );
}

export default Continue;
