
const ADD_POST ='ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


let initialState = {
  posts: [ 
    {id: 1, message: 'Hi, how are u?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11}],
  newPostText: ''
  };

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default: 
      return state;
    }
}

export const addPostActionCreater = () => {
  return {
    type: ADD_POST,
    }
};
export const updateNewPostTextActionCreater = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newText: text}
};


export default profileReducer;