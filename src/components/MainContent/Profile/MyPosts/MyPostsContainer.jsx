import React from 'react';
import {updateNewPostTextActionCreator,addPostActionCreator} from "./../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
/*import StoreContext from "./../../../../StoreContext";*/
import {connect} from "react-redux";

/*const MyPostsContainer = (props) => { 
	 return (
     <StoreContext.Consumer>
      {
       (store) => {
          let addPost = (text) => {
            store.dispatch(addPostActionCreator(text));
          };
          let onPostChange = (text) => {
            store.dispatch(updateNewPostTextActionCreator(text));
          };
          return <MyPosts onPostChange={onPostChange} addPost={addPost} profilePage={store.getState().profilePage}/>
       }
     }
     </StoreContext.Consumer>
   );
}*/

let mapStateToProps = (state) => {
  return {
    profilePage:state.profilePage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onPostChange:(text) => {
       dispatch(updateNewPostTextActionCreator(text));
    },
    addPost:(text) => {
       console.log("newMessageChange");
       dispatch(addPostActionCreator(text));
    }
  }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;