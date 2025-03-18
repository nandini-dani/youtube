import React from 'react';

const VideoCard = ({ info }) => {
  //console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="m-2 p-2 w-56 shadow-lg">
      <img
        className="rounded-lg"
        alt="thumbnails"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="bold truncate">{title}</li>
        <li className="">{channelTitle}</li>
        <li className="text-sm"> {statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
