import React from 'react';
import classes from "./Users.module.css";

const Users = (props) => {

    if (props.users.length === 0){
		props.setUsers([
			{id:1,photoUrl:"https://www.dmitry-romanoff-music.com/wp-content/uploads/2019/05/cropped-gallery_img_1.jpg",followed: false, fullName:"Oleg", status:"I am a boss", location:{city:"Minsk",country:"Belarus"}},
            {id:2,photoUrl:"https://www.dmitry-romanoff-music.com/wp-content/uploads/2019/05/cropped-gallery_img_1.jpg", followed: true, fullName:"Sasha", status:"I am a boss too", location:{city:"Moscow",country:"Russia"}},
            {id:3,photoUrl:"https://www.dmitry-romanoff-music.com/wp-content/uploads/2019/05/cropped-gallery_img_1.jpg", followed: false, fullName:"Andrew", status:"I am a boss too", location:{city:"Kiev",country:"Ukraine"}}
		]);
	} 
	
	return <div className={classes.usersWrapper}>
		{
			props.users.map(u => <div key={u.id} className={classes.usersItem}>
				<div className={classes.usersLeft}>
					<div>
						<img src={u.photoUrl} className={classes.photo}/>
					</div>
					<div>
						{u.followed ? 
						 <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
						 <button onClick={() => {props.follow(u.id)}}>Follow</button>}
					</div>		
				</div>
				<div className={classes.usersRight}>
					<div>{u.fullName}</div>
					<div>{u.status}</div>
					<div>{u.location.country}</div>
					<div>{u.location.city}</div>
				</div>
			</div>)
		}
	</div>;
}

export default Users;