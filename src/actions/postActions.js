import { FETCH_POSTS, NEW_POSTS, UPDATE_POST, CURRENT_POST} from './types';

export const fetchPosts = () => dispatch => {
  fetch('http://localhost:3000/api/v1/posts')
  .then(res => res.json())
  .then(posts => dispatch({
    type: FETCH_POSTS,
    payload: posts
  }));
}

export const createPost = (postData) => dispatch => {
  fetch('http://localhost:3000/api/v1/posts',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
      type: NEW_POSTS,
      payload: post
    })
  );
}
export const editPost = (postData) => dispatch => {
  console.log(postData)
  fetch(`http://localhost:3000//api/v1/posts/${postData.post_id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
      type: UPDATE_POST,
      payload: post
    })
  );
}
