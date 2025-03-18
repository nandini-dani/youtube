import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className="col-span-4">
      <ButtonList></ButtonList>
      <VideoContainer></VideoContainer>
    </div>
  );
};

export default MainContainer;
