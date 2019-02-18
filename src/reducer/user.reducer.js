const initialState = {
    user: null,
    authorizationKey: null,
};

const userReducer = (state = initialState, action)=> {
    switch(action.type){
        case 'SET_USER': {
            return  {...state, user: action.payload.user};
        }
        case 'RESET_USER': {
            return {...state, user: null, authorizationKey : null };
        }
        case 'SET_AUTH_KEY': {
            return {...state, authorizationKey: action.payload.authorizationKey}
        }
        default: {
            return state;
        }
    }
}

export  default userReducer;