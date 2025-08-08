import { useParams, Link } from "react-router";
import videos from "./data/videos.json";
import CommentSection from "./CommentSection";
import RelatedVideo from "./RelatedVideo";
import Header from "./components/Header";

const Player = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id);
  const relatedVideos = videos.filter((v) => v.id !== id);

  if (!video) return <div className='p-8 text-center'>Video not found</div>;

  return (
    <div>
      {/* Header with Search */}

      <Header />
      {/* Main Content */}
      <div className='max-w-[1600px] mx-auto p-4'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2'>
            {/* Video Player */}
            <div className='w-full bg-black aspect-video rounded-xl overflow-hidden'>
              <iframe
                src={video.embedUrl}
                title={video.title}
                className='w-full h-full'
                allowFullScreen
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              ></iframe>
            </div>

            {/* Video Info */}
            <div className='mt-4'>
              <h1 className='text-xl font-bold mb-2'>{video.title}</h1>
              <div className='flex items-center justify-between border-b border-gray-200 pb-4 mb-4'>
                <div>
                  <div className='flex items-center space-x-2'>
                    <img
                      src={video.channelLogo}
                      alt={video.channel}
                      className='w-10 h-10 rounded-full object-cover'
                    />
                    <div>
                      <p className='font-medium'>{video.channel}</p>
                      <p className='text-sm text-gray-600'>{video.views}</p>
                    </div>
                  </div>
                </div>
                <div className='flex space-x-2'>
                  <button className='flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full'>
                    <span>👍</span>
                    <span>Like</span>
                  </button>
                  <button className='flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full'>
                    <span>👎</span>
                    <span>Dislike</span>
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className='bg-gray-50 rounded-xl p-4'>
                <p className='text-sm text-gray-700'>{video.description}</p>
              </div>

              {/* Comments */}
              <CommentSection comments={video.comments} />
            </div>
          </div>

          {/* Related Videos Sidebar */}
          <div className='lg:col-span-1'>
            <div className='sticky top-[calc(4rem+16px)]'>
              <div className='space-y-4'>
                {relatedVideos.map((video) => (
                  <RelatedVideo key={video.id} video={video} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
