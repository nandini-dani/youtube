import React, { useEffect, useState, useRef } from 'react';
import { VIDEO_API_URL } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const fetched = useRef(false);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const response = await fetch(VIDEO_API_URL);
    const data = await response.json();
    setVideos(data.items);
    console.log(data.items);
  };
  // if (!videos?.length) return <div>shimmer ui</div>;
  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link to={'/watch?v=' + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
