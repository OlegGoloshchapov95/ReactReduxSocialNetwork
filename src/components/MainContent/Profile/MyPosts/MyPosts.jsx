import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

   let postsData = props.profilePage.postData.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>);
   let newPostElement = React.createRef();
   console.log(props);
   let onAddPost = () => {
     let text = newPostElement.current.value;
     props.addPost(text);
   }
   let onPostChange = () => {
     let text = newPostElement.current.value;
     props.onPostChange(text);
   } 
	return <div className={classes.postsBlock}>
          <h3 className={classes.postsTitle}>my posts</h3>
          <div className={classes.addPostBlock}>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText}>
            	 
            </textarea>
            <button onClick={onAddPost}>Add post</button>
          </div>
          <div className={classes.posts}>
            {postsData}
          </div>
        </div>;
     
}

export default MyPosts;