import React from "react";
import Dialogs from './Dialogs';
import {updateNewMessageBodyCreator,sendMessageCreator} from './../../../redux/dialogs-reducer'
const DialogsContainer = (props) => { 

  let store = props.store;

  let sendMessageClick = () => {
    store.dispatch(sendMessageCreator());
  }
  let newMessageChange = (body) => {
	store.dispatch(updateNewMessageBodyCreator(body));
  }
  return <Dialogs dialogsPage={store.getState().dialogsPage} sendMessageClick={sendMessageClick} newMessageChange={newMessageChange}/>;
   
}

export default DialogsContainer;