import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
	return <div className={classes.profileWrapper}>
        <ProfileInfo/>
        <MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/> 
      </div>;
}

export default Profile;