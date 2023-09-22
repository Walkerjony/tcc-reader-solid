// CommentList.js

import { createEffect, createSignal, onCleanup } from 'solid-js';
import axios from 'axios';
import { data } from 'autoprefixer';

const CommentList = () => {
  const [comments, setComments] = createSignal([]);

  // Fetch comments from the backend API
  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:8001/comments');
      if(response){
        console.log(response.data)
        setComments(response.data);
      }else{
        c
      }
    } catch (error) {
      console.error('Error occurred:', error.message || error);
    }
  };

  // Call fetchComments when the component is mounted
    createEffect(fetchComments, [])
  return (
    <div>
      <h2>Comments</h2>
      {comments().map((comment) => (
        <div key={comment.id}>{comment.text}</div>
      ))}
    </div>
  );
};

export default CommentList;
