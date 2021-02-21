import React from 'react';
import {updateNewPostTextActionCreator,addPostActionCreator} from "./../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "./../../../../StoreContext";
const MyPostsContainer = (props) => { 
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
}

export default MyPostsContainer;