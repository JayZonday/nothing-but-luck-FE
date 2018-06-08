import {FETCH_POSTS, NEW_POSTS} from './types';

export const fetchPosts = () => dispatch => {
    console.log("fetching")
    fetch('http://localhost:3000/api/v1/posts')
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }));
}
