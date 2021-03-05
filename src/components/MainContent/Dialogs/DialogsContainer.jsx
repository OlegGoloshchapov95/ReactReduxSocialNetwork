import React from "react";
import Dialogs from './Dialogs';
import {updateNewMessageBodyCreator,sendMessageCreator} from './../../../redux/dialogs-reducer';
//import StoreContext from "./../../../StoreContext";
import {connect} from "react-redux";

/*const DialogsContainer = (props) => { 
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
}*/
let mapStateToProps = (state) => {
   return {
     dialogsPage:state.dialogsPage
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
     sendMessageClick:() => {
        dispatch(sendMessageCreator());
     },
     newMessageChange:(body) => {
        console.log("newMessageChange");
        dispatch(updateNewMessageBodyCreator(body));
     }
   }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs); 

export default DialogsContainer;