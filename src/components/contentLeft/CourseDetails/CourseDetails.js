import React from 'react';
import ReactPlayer from 'react-player';

function CourseDetails({ location }) {
  console.log(location);
  return (
    <div style={{ marginLeft: '29vh' }}>
      <ReactPlayer
        url={location.state.videoUrl}
        width={640}
        height={360}
        controls
        playing={true}
      />
    </div>
  );
}

export default CourseDetails;
