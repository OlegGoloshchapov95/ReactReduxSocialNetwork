import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {NavLink} from 'react-router-dom';
const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
  let messagesElements = props.dialogsPage.messagesData.map(message => <Message message={message.message}/>);
  
  let newMessageBody = props.dialogsPage.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessageClick();
  }
  let onNewMessageChange = (event) => {
	let body = event.target.value;
	props.newMessageChange(body);
  }
   return (
   	 <div className={classes.dialogs}>
   	   <div className={classes.dialogsItems}>
          {dialogsElements}
   	   </div>
   	   <div className={classes.messages}>
   	      <div>{messagesElements}</div>
		  <div>
			  <div>
				  <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"></textarea>
			  </div>
			  <div><button onClick={onSendMessageClick}>Send</button></div>
		  </div>	 
   	   </div>
   	 </div>
   )
}

export default Dialogs;