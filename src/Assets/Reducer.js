const AllReducers = (state={isSectionVisible:true},action) =>{
    switch(action.type){
        case 'post/toggle':
            state = {...state,isSectionVisible:!state.isSectionVisible};
            return state;
        default:
            return state
    }
}
export default AllReducers;