import {BAGS} from '../../data/bags'
import { SELECT_BAG_ID } from '../actions/bags.actions';

const initialState = {
    list: BAGS,
    selectedId: null,
}

const BagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_BAG_ID:
            return {
                ...state,
                selectedId: action.bagID
            }
            break;
    
        default:
            return state;
    }
    
}

export default BagsReducer;