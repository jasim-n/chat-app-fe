const loggedReducer=(state=false,action)=>{
    switch(action.type){
        case 'Sign-in':
            return !state ;
           
    }

}
export default loggedReducer;