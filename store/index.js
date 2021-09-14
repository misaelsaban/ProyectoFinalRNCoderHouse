import { combineReducers, createStore } from "redux";

import BagsReducer from "./reducers/bags.reducer";
import CategoryReducer from "./reducers/category.reducer";

const RootReducer = combineReducers({
  bags: BagsReducer,
  categories: CategoryReducer    
})


export default createStore(RootReducer);