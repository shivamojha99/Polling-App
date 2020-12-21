export const initialState={
    user:null,
    canVote:null,
};

export const actionTypes={
    SET_USER:"SET_USER",
};

 const reducer =(state,action)=>{
    switch(action.type){
        case actionTypes.SET_USER:
        return{
            ...state,
            user:action.user
        }
        case "cannotvote":
            return{
                ...state,
                canVote:false,
            }
            case "canvote":
                return{
                    ...state,
                    canVote:true,
                }    

        default:
        return state
    }
}

export default reducer;
