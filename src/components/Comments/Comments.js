import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comment } = props;

  return (
    <div>
      {
        comment.map(cmnt => {
          return <Comment key={cmnt.id} comment={cmnt} />
        })
      }
    
    </div>
  );
};

export default Comments;
