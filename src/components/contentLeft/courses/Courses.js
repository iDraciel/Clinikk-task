import React, { useState } from 'react';
import styles from './courses.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CourseData from './CourseData';
import { Link, BrowserRouter as Router } from 'react-router-dom';

function Courses() {
  const [datas, setDatas] = useState(CourseData);
  console.log(datas);
  return (
    <div className={styles.content}>
      <h2 className={styles.headerOne}>Courses</h2>
      <div className={styles.category}>
        <h3 className={styles.headerTwo}>All Courses</h3>
        <h3 className={styles.headerThree}>The Newest</h3>
        <h3 className={styles.headerThree}>Top Rated</h3>
        <h3 className={styles.headerThree}>Most Active</h3>
      </div>
      <div>
        <InfiniteScroll
          dataLength={datas.length}
          hasMore={true}
          height={'44vh'}
        >
          {datas.map((data, i) => {
            return (
              <div key={i} className={styles.course}>
                <div className={styles.image}>
                  <img
                    src={data.image}
                    alt={data.id}
                    style={{
                      width: '6vh',
                      marginLeft: '0.5vh',
                      marginTop: '0.5vh',
                      height: '6vh',
                    }}
                  />
                </div>
                <div className={styles.text}>
                  <h2 className={styles.headerFour}>{data.title}</h2>
                  <p className={styles.para}>by {data.createdBy}</p>
                </div>
                <div className={styles.duration}>
                  <FontAwesomeIcon
                    style={{ marginRight: '1vh' }}
                    icon={faClock}
                  />{' '}
                  <p className={styles.paraText}>{data.duration}</p>
                </div>
                <div className={styles.rating}>
                  <FontAwesomeIcon
                    style={{ marginRight: '1vh' }}
                    icon={faStar}
                  />{' '}
                  <p className={styles.paraText}>{data.rating}</p>
                </div>
                <div className={styles.view}>
                  <Link
                    to={{
                      pathname: data.id,
                      state: {
                        videoUrl: data.link,
                      },
                    }}
                  >
                    <button className={styles.button}>View Course</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Courses;
