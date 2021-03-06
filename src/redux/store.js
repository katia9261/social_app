import dialogsReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


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





export default store;
window.state = store;