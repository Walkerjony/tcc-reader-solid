// CommentForm.js

import { useLocation } from '@solidjs/router';
import { createSignal } from 'solid-js';
import axios from 'axios';

function CommentForm () {
  const user = localStorage.getItem("user")
  const location = useLocation();
  const bookId = location.state.id
  const [text, setText] = createSignal('');
  
  const submitComment = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8001/comments', {
        bookId,
        user,
        text: text() 
      }).then((res) => {
        if (res.data.error) {
          console.log(res.data.error)
        } else {
          console.log(user)
          console.log(text())
          console.log(res)
        }
      });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form class="space-y-6"  onSubmit={submitComment} method="POST">
      <textarea value={text()} onInput={(e) => setText(e.target.value)} id="text" name="text" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
} 
  
  

export default CommentForm;
