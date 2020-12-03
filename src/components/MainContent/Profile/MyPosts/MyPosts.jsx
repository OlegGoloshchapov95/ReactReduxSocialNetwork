import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {updateNewPostTextActionCreator,addPostActionCreator} from "./../../../../redux/profile-reducer";

const MyPosts = (props) => {

   let postsData = props.profilePage.postData.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>);

   
   let newPostElement = React.createRef();
   
   let addPost = () => {
     let text = newPostElement.current.value;
     props.dispatch(addPostActionCreator(text));
   }

   let onPostChange = () => {
     let text = newPostElement.current.value;
     props.dispatch(updateNewPostTextActionCreator(text));
   } 
	return <div className={classes.postsBlock}>
          <h3>my posts</h3>
          <div className={classes.addPostBlock}>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText}>
            	 
            </textarea>
            <button onClick={addPost}>Add post</button>
          </div>
          <div className={classes.posts}>
            {postsData}
          </div>
        </div>;
     
}

export default MyPosts;