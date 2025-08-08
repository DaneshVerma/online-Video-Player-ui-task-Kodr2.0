import React from "react";

const CommentSection = ({ comments }) => (
  <div className='mt-8 border-t pt-6'>
    <h4 className='text-xl font-bold mb-4'>Comments</h4>
    <ul className='space-y-4'>
      {comments.map((c, i) => (
        <li key={i} className='flex items-start space-x-3'>
          <div className='w-10 h-10 rounded-full bg-gray-200 flex-shrink-0' />
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
