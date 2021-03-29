const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
     /*
     {id:1,photoUrl:"https://www.dmitry-romanoff-music.com/wp-content/uploads/2019/05/cropped-gallery_img_1.jpg",followed: false, fullName:"Oleg", status:"I am a boss", location:{city:"Minsk",country:"Belarus"}},
     {id:2,photoUrl:"https://www.dmitry-romanoff-music.com/wp-content/uploads/2019/05/cropped-gallery_img_1.jpg", followed: true, fullName:"Sasha", status:"I am a boss too", location:{city:"Moscow",country:"Russia"}},
     {id:3,photoUrl:"https://www.dmitry-romanoff-music.com/wp-content/uploads/2019/05/cropped-gallery_img_1.jpg", followed: false, fullName:"Andrew", status:"I am a boss too", location:{city:"Kiev",country:"Ukraine"}}
     */
    ]	
};	  

const usersReducer = (state = initialState,action) => {

    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                   if(u.id === action.userId){
                       return {...u,followed:true}
                   }
                   return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                   if(u.id === action.userId){
                       return {...u,followed:false}
                   }
                   return u;
                })
            }
        case SET_USERS:
            return {
                ...state,users:[...state.users,...action.users]
            }    
        default:
            return state;            
            
    }
}

/*export const addPostActionCreator = (text) => ({type:ADD_POST,postMessage:text});
export const updateNewPostTextActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT,newText:text});*/

export const followAC = (userId) => ({type:FOLLOW,userId});

export const unfollowAC = (userId) => ({type:UNFOLLOW,userId});

export const setUsersAC = (users) => ({type:SET_USERS,users});

export default usersReducer; 