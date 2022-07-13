const UPDATE_NEW_NESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState =  {
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
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_NESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody='';
      state.messages.push({id: 6, message: body});
      return state;
    default:
      return state;
  }
}

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

export default dialogsReducer;