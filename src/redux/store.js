import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
     _state: {
		dialogsPage:{
			dialogsData: [{id:1,name:"Dimych"},
						 {id:2,name:"Andrey"},
						 {id:3,name:"Sveta"},
						 {id:4,name:"Sasha"},
						 {id:5,name:"Viktor"},
						 {id:6,name:"Valera"}],
	 
			messagesData: [{id:1,message:"Hi"},
						   {id:2,message:"How is your it-camasutra?"},
						   {id:3,message:"Yo"},
						   {id:4,message:"Yo"},
						   {id:5,message:"Yo"}],
	        newMessageBody:""					   
	   },
	   profilePage:{
			postData: [
			 {id:1, message:"Hi, How are you?", likesCount:12 },
			 {id:2, message:"It's my first post!", likesCount:12},
			 {id:3, message:"Blabla", likesCount:11},
			 {id:4, message:"Dada", likesCount:11}
			],
			newPostText:'it-kamasutra.com'	
	   }	  
	 },
	 _callSubscriber() {
		console.log("State changed");
	 },	
	 getState() {
       return this._state;
	 }, 
	 subscribe(observer){
		this._callSubscriber = observer; //observer - паттерн
	 },
	dispatch(action){ // {type:'ADD-POST'}

	   this._state.profilePage = profileReducer(this._state.profilePage, action);
	   this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
	   this._callSubscriber(this._state);
    
	}

}
	
export default store;
window.store = store;
