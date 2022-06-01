import { createContext, useReducer } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = { avatar: null, username: null };

export const ActionType = {
    UserDetails: "USER",
    Username: "USERNAME",
    Avatar: "AVATAR",
    Logout: "LOGOUT"
}

export const UserContext = createContext({
    state: initialState,
    dispatch: () => { }
});

const singleCaseState = (caseItem, state, action) => {
    AsyncStorage.setItem(`${caseItem}`, action.payload[caseItem]);
    return { ...state, [caseItem]: action.payload[caseItem] }
}

const appReducer = (state, action) => {
    switch (action.type) {
        case ActionType.UserDetails:
            AsyncStorage.setItem('username', action.payload.username);
            AsyncStorage.setItem('avatar', action.payload.avatar);

            return { ...state, username: action.payload.username, avatar: action.payload.avatar }

        case ActionType.Avatar: singleCaseState(`avatar`, state, action);

        case ActionType.Username: singleCaseState(`username`, state, action);

            return { ...state, username: action.payload.username }

        case ActionType.Logout: return initialState;

        default:
            console.error("Action not found.");
            return state;
    }
}

export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}