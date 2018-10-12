const initState = {
    articles: []
}

 const reducer = (state = initState, actions) => {
    switch(actions.type) { 
        case "GET_ARTICLES": 
            return {...state, articles: actions.payload}
        default: return state
    }
}

export default reducer