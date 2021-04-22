const initialState = {
    number:0,
    color:"#00000"
}

const counterReducer =(state =initialState, action ) => {
    const newState = {...state };

    switch (action.type) {
        case "change_color":
        newState.color = action.color;
        return newState;
        case "increment_by_1":
            newState.number++;
            return newState;
            case "increment_by_10":
            newState.number += 10;
            return newState;

            default:
                break;
    }
    return state;
}

export default counterReducer;
