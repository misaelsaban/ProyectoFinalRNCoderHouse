import {CATEGORIES} from '../../data/categories';
import { SELECT_CATEGORY } from '../actions/category.actions';

const initialState = {
    list: CATEGORIES,
    selectedId: null,
}

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {
                ...state,
                selectedId: action.categoryID
            }
            break;
    
        default:
            return state;
    }
    
}

export default CategoryReducer;