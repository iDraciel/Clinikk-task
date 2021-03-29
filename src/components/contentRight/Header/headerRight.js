import React from 'react';
import classes from './headerRight.module.css';
import SearchBar from 'material-ui-search-bar';
import { faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from '../../../assets/profile.png';

function HeaderRight() {
  return (
    <>
      <div className={classes.headerRight}>
        <div className={classes.searchBar}>
          <SearchBar />
        </div>
        <div className={classes.notification}>
          <FontAwesomeIcon
            style={{ marginRight: '1vh' }}
            size="2x"
            icon={faBell}
          />
        </div>
        <div className={classes.profile}>
          <img
            src={Profile}
            alt=""
            style={{
              width: '7vh',
              height: '7vh',
            }}
          />
        </div>
        <div className={classes.down}>
          <FontAwesomeIcon style={{ marginRight: '1vh' }} icon={faCaretDown} />
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.rectangle} style={{ marginRight: '6vh' }}>
          <h1 className={classes.headerOne}>11</h1>
          <div className={classes.paraText}>
            <p>Courses</p>
            <p style={{ marginTop: '-1.5vh' }}>Completed</p>
          </div>
        </div>
        <div className={classes.rectangle}>
          <h1 className={classes.headerOne}>4</h1>
          <div className={classes.paraText}>
            <p>Courses</p>
            <p style={{ marginTop: '-1.5vh' }}>in Progress</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderRight;
