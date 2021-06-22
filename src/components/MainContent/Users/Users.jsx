import React from 'react';
import classes from "./Users.module.css";
import * as axios from 'axios';

class Users extends React.Component{
	componentDidMount() {
		axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            this.props.setUsers(response.data.items);
        });
	}
    render(){
        let usersThis = this;
        return <div className={classes.usersWrapper}>
		{
			this.props.users.map(u => <div key={u.id} className={classes.usersItem}>
				<div className={classes.usersLeft}>
					<div>
						<img src={u.photoUrl?u.photoUrl:require("./../../../assets/cat2.jpg")} className={classes.photo}/>
					</div>
					<div>
						{u.followed ? 
						 <button className={classes.followButton} onClick={() => {usersThis.props.unfollow(u.id)}}>Unfollow</button> :
						 <button className={classes.followButton} onClick={() => {usersThis.props.follow(u.id)}}>Follow</button>}
					</div>		
				</div>
				<div className={classes.usersRight}>
					<div className={classes.userName}>{u.name}</div>
					<div>{u.status}</div>
					<div>{/*u.location.country*/}Ukraine</div>
					<div>{/*u.location.city*/}Kharkov</div>
				</div>
			</div>)
		}
	</div>;
    }
}

export default Users;