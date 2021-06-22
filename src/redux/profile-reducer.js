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
            let newPostId = state.postData[state.postData.length - 1].id + 1;
            let newPost = {
                id:newPostId,
                message:action.postMessage,
                likesCount:0 
            };
            return {
               ...state,
               postData:[...state.postData,newPost],
               newPostText:""
            };
        }    
        case UPDATE_NEW_POST_TEXT:{  
            return{
                ...state,
                newPostText:action.newText
            };
        }    
        default:
            return state;       
    }
}

export const addPostActionCreator = (text) => ({type:ADD_POST,postMessage:text});
export const updateNewPostTextActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT,newText:text});

export default profileReducer; 