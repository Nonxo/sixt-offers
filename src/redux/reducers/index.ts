import {combineReducers} from "redux";
import offersReducer from "./offersReducer";

const rootReducer = combineReducers({ offers: offersReducer});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;