import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


const ADD_POST ='ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_NESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAG';

let store = {
  _state: {
    profilePage: {
      posts: [ 
        {id: 1, message: 'Hi, how are u?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}],
      newPostText: ''
      },
  
    dialogsPage: {
      messages : [
        {id: 1, message: 'Hi'}, 
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hey'},
        {id: 4, message: 'Yo'}],
  
      
      dialogs : [
        {id: 1, name: ' Katia'}, 
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Mania'},
        {id: 4, name: 'Katia'},
        {id: 5, name: 'Masha'},
        {id: 6, name: 'Natasha'},
        {id: 7, name: 'Valera'},
      ],
      
      newMessageBody: ""
    },
    sidebar: {}
  },
  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("Changed");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}


export const addPostActionCreater = () => {
  return {
    type: ADD_POST
    }
};

export const SendMessageCreator = (body) => {
  return {
    type: SEND_MESSAGE,
    body: body
    }
};

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_NESSAGE_BODY,
    body: body
    }
};

export const updateNewPostTextActionCreater = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newText: text}
};


export default store;
window.state = store;