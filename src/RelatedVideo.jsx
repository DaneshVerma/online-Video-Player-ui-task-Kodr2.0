import React from "react";
import { Link } from "react-router";

const RelatedVideo = ({ video }) => (
  <Link
    to={`/watch/${video.id}`}
    className='flex gap-2 mb-3 hover:bg-gray-100 rounded-lg p-2'
  >
    <img
      src={video.thumbnail}
      alt={video.title}
      className='w-40 h-24 object-cover rounded-lg flex-shrink-0'
    />
    <div className='flex-1 min-w-0'>
      <h3 className='text-sm font-medium line-clamp-2'>{video.title}</h3>
      <div className='flex items-center gap-2 mt-1'>
        <img
          src={video.channelLogo}
          alt={video.channel}
          className='w-6 h-6 rounded-full object-cover'
        />
        <div>
          <p className='text-xs text-gray-600'>{video.channel}</p>
          <p className='text-xs text-gray-600'>{video.views}</p>
        </div>
      </div>
    </div>
  </Link>
);

export default RelatedVideo;
