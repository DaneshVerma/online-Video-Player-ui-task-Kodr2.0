import React from "react";

const CommentSection = ({ comments }) => (
  <div className='mt-8 border-t pt-6'>
    <h4 className='text-xl font-bold mb-4'>Comments</h4>
    <ul className='space-y-4'>
      {comments.map((c, i) => (
        <li key={i} className='flex items-start space-x-3'>
          <div className='w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6'
            >
              <path d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z' />
            </svg>
          </div>
          <div>
            <span className='font-medium text-sm'>{c.user}</span>
            <p className='text-sm text-gray-700 mt-1'>{c.text}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default CommentSection;
