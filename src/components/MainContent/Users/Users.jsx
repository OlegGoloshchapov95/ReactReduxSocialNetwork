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
	
	return <div>
		{
			props.users.map(u => <div key={u.id}>
				<span>
					<div>
						<img src={u.photoUrl}/>
					</div>
					<div>
						{u.followed ? 
						 <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
						 <button onClick={() => {props.follow(u.id)}}>Follow</button>}
					</div>		
				</span>
				<span>
					<span>
						<div>{u.fullName}</div>
						<div>{u.status}</div>
					</span>
					<span>
					    <div>{u.location.country}</div>
						<div>{u.location.city}</div>
					</span>
				</span>
			</div>)
		}
	</div>;
}

export default Users;