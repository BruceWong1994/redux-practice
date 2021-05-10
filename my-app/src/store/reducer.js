const initialState = {
    num: 0,
    checked: false,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'plus':
            return Object.assign({}, state, { num: state.num + action.act })

        case 'return':
            return Object.assign({}, state, { num: 0 })

        case 'color':
            return Object.assign({}, state, { checked: true })

        case 'clearAll':
            return initialState
            
        default:
            return state;
    }
}

export default reducer;