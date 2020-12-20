import React from 'react';
import {updateNewPostTextActionCreator,addPostActionCreator} from "./../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
const MyPostsContainer = (props) => {
   let store = props.store;
   let addPost = (text) => {
     store.dispatch(addPostActionCreator(text));
   };
   let onPostChange = (text) => {
     store.dispatch(updateNewPostTextActionCreator(text));
   }; 
	 return (<MyPosts onPostChange={onPostChange} addPost={addPost} profilePage={store.getState().profilePage}/>);
}

export default MyPostsContainer;