import getAdjacentRoutes from "../../helper/getAdjacentRoutes";
import { updateObject } from "../utility";

const initialState = {
    currentRoute: {},
    nextRoute: {},
    prevRoute: {}
};

const routeReducer = (state = initialState, action) => {
    const [prev,next] = getAdjacentRoutes(action.payload);
    switch (action.type) {
        case 'STORE_ROUTE': return (updateObject(state, { currentRoute: action.payload, nextRoute: next, prevRoute: prev }));
        default:
            return state;
    }
}

export default routeReducer;
