const initialState = {
    num: 0
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'plus':
            return { num: state.num + action.act }

        case 'return':
            return { num: 0 }

        default:
            return state;
    }
}

export default reducer;