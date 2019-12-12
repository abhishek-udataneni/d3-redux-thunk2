let initialState = {
    data: {}
}
export default (state = initialState , action) => {
    switch (action.type) {
        case 'data_success': 
            return {...state,data : action.data}
        default:
            return state;
    }
};