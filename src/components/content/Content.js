import React from 'react';
import Header from '../contentLeft/Header/header';
import Continue from '../contentLeft/courseContinue/continue';
import Courses from '../contentLeft/courses/Courses';
import HeaderRight from '../contentRight/Header/headerRight';
import Stats from '../contentRight/Stats/Stats';
import LearnMore from '../contentRight/bottom/book';

function Content() {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <Header />
        <Continue />
        <Courses />
      </div>
      <div>
        <HeaderRight />
        <Stats />
        <LearnMore />
      </div>
    </div>
  );
}

export default Content;
