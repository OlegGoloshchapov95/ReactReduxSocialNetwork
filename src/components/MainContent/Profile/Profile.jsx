import React from 'react';
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
	return <div className={classes.profileWrapper}>
        <ProfileInfo/>
        <MyPostsContainer/> 
      </div>;
}

export default Profile;