import React from "react";
import Dialogs from './Dialogs';
import {updateNewMessageBodyCreator,sendMessageCreator} from './../../../redux/dialogs-reducer';
import StoreContext from "./../../../StoreContext";
const DialogsContainer = (props) => { 
  return (
    <StoreContext.Consumer>
    {
      (store) => {
          let sendMessageClick = () => {
            store.dispatch(sendMessageCreator());
          }
          let newMessageChange = (body) => {
            store.dispatch(updateNewMessageBodyCreator(body));
          }
          return <Dialogs dialogsPage={store.getState().dialogsPage} sendMessageClick={sendMessageClick} newMessageChange={newMessageChange}/>;
      }
    }
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;