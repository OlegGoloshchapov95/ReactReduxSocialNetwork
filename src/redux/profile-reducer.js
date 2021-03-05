const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
     {id:1, message:"Hi, How are you?", likesCount:12 },
     {id:2, message:"It's my first post!", likesCount:12},
     {id:3, message:"Blabla", likesCount:11},
     {id:4, message:"Dada", likesCount:11}
    ],
    newPostText:'it-kamasutra.com'	
};	  

const profileReducer = (state = initialState,action) => {

    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id:5,
                message:action.postMessage,
                likesCount:0 
            };
            let newState = {...state};
            newState.postData = [...state.postData];
            newState.postData.push(newPost);
            newState.newPostText = "";
            return newState;
        }    
        case UPDATE_NEW_POST_TEXT:{  
            let newState = {...state};
            newState.newPostText = action.newText;
            return newState;
        }    
        default:
            return state;       
    }
}

export const addPostActionCreator = (text) => ({type:ADD_POST,postMessage:text});
export const updateNewPostTextActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT,newText:text});

export default profileReducer; 