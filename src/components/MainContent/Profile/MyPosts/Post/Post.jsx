import React from 'react';
import classes from "./Posts.module.css";

const Post = (props) => {
	return  <div className={classes.item}>
	             <div className={classes.title}>Пост №{props.id}</div>
	             <img className={classes.photo} src={require("./../../../../../assets/cat.jpg")}/>
	             {props.message}
	             <div className={classes.countOfLikes}>
	               {props.likesCount} лайков
	             </div>
	        </div>
}

export default Post;