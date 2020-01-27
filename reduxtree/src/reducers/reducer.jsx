
const iState={
    name:"shubham",
    wishes:['eat','code']
}

const reducer=(state=iState,action)=>{
    if(action.type=="Change_name"){
        return{
            name:action.payload
        }
    }
    return state;
}

export default reducer
