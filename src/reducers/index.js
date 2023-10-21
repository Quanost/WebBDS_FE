import authService from "../services/authService";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";
// import todoReducer  from "./todoReducer";
import {combineReducers} from 'redux'


const rootReducer = combineReducers ({
    // todostore: todoReducer,
    login: authService,
    auth: authReducer,
    message: messageReducer
});
export default rootReducer;