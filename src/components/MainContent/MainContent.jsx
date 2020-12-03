import React from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Profile from './Profile/Profile.jsx';
import Dialogs from './Dialogs/Dialogs.jsx';
import classes from './MainContent.module.css';
import {Route} from 'react-router-dom';

const MainContent = (props) => {
  return(
	    <div className={"clearfix "+classes.mainContent}>
	      <Navbar/>
	      {/*<Profile/>*/}
	      <div className={classes.appWrapperContent}>
	         <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
	         <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
	      </div>
	    </div>
  );
}

export default MainContent;
