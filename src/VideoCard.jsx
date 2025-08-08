import { Link } from "react-router";

const VideoCard = ({ video }) => (
  <div className='w-full sm:w-72 hover:bg-gray-100 rounded-xl transition duration-200'>
    <Link to={`/watch/${video.id}`}>
      <img
        src={video.thumbnail}
        alt={video.title}
        className='w-full aspect-video rounded-xl object-cover'
      />
      <div className='p-3'>
        <h3 className='font-medium text-sm line-clamp-2 mb-1'>{video.title}</h3>
        <p className='text-gray-600 text-sm'>{video.channel}</p>
        <p className='text-gray-600 text-sm'>{video.views}</p>
      </div>
    </Link>
  </div>
);

export default VideoCard;
