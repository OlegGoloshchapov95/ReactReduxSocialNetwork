import React from 'react';
import classes from "./Users.module.css";
import * as axios from 'axios';

class Users extends React.Component{
    constructor(props){
        super(props);
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
						<img src={u.photoUrl} className={classes.photo}/>
					</div>
					<div>
						{u.followed ? 
						 <button onClick={() => {usersThis.props.unfollow(u.id)}}>Unfollow</button> :
						 <button onClick={() => {usersThis.props.follow(u.id)}}>Follow</button>}
					</div>		
				</div>
				<div className={classes.usersRight}>
					<div>{u.name}</div>
					<div>{u.status}</div>
					<div>{/*u.location.country*/}</div>
					<div>{/*u.location.city*/}</div>
				</div>
			</div>)
		}
	</div>;
    }
}

export default Users;