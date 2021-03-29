const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state=initialState,action) => {

    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:{
            return {
              ...state,
              newMessageBody:action.body
            };
        }
        case SEND_MESSAGE:{ 
            return {
                ...state,
                messagesData:[...state.messagesData,{id:6, message:state.newMessageBody}],
                newMessageBody:""
            } 
        }
        default:
            return state;      
    }  
}

export const sendMessageCreator = () => ({type:SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type:UPDATE_NEW_MESSAGE_BODY,body:body});

export default dialogsReducer;