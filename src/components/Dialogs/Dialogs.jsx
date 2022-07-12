import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { SendMessageCreator, updateNewMessageBodyCreator } from './../../redux/state';

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let messagesElements = state.messages.map( m => <Message message={m.message}/>)
  let dialogsElements =state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />) 
  let newMassageBody = state.newMassageBody;

let onSendMessageClick = () => {
  props.store.dispatch(SendMessageCreator());
}

let onNewMessageChange = (e) => {
  let body = e.target.value;
  props.store.dispatch(updateNewMessageBodyCreator(body));
}

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>

      <div className={s.messages}>
        <div>{ messagesElements }</div>
        <div>
          <div>
            <textarea value= {newMassageBody} 
                      onChange={onNewMessageChange}
                      placeholder='Enter your message'></textarea>
          </div>
          <div>
            <button onClick = { onSendMessageClick} >Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

/*.
    let newPostElement = React.createRef();
  
    let addMess = () => {
      props.addMess();
      props.updateNewMessText('');
    }
  
  let onMessChange = () => {
    let text = newMessElement.current.value;
    props.updateNewMessText(text);
  }
  
    return (
      <div className={s.messBlock}>
        <h3>My mess</h3>
        <div>
          <div>
            <textarea onChange={onMessChange} ref={newMessElement}  value={props.newMessText}/>
          </div>
          <div>
            <button onClick = { addMess } >Add mess</button>
          </div>
        </div>
        <div className={s.mess}>
          {messElements}
        </div>
      </div>
    );
  };
  
  export default MyPosts;.*/
