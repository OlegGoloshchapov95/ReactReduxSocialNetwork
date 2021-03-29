import React from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Profile from './Profile/Profile.jsx';
import UsersContainer from './Users/UsersContainer.jsx';
import DialogsContainer from './Dialogs/DialogsContainer.jsx';
import classes from './MainContent.module.css';
import {Route} from 'react-router-dom';

const MainContent = (props) => {
  return(
	    <div className={"clearfix "+classes.mainContent}>
	      <Navbar/>
	      <div className={classes.appWrapperContent}>
	         <Route path='/dialogs' render={() => <DialogsContainer/>}/>
	         <Route path='/profile' render={() => <Profile/>}/>
			 <Route path='/users' render={() =><UsersContainer/>}/>
	      </div>
	    </div>
  );
}

export default MainContent;
