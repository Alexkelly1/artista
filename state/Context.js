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

const appReducer = (state, action) => {
    switch (action.type) {
        case ActionType.UserDetails:
            AsyncStorage.setItem('username', action.payload.username);
            AsyncStorage.setItem('avatar', action.payload.avatar);

            return { ...state, username: action.payload.username, avatar: action.payload.avatar }

        case ActionType.Avatar:
            AsyncStorage.setItem("avatar", action.payload.avatar);

            return { ...state, avatar: action.payload.avatar };

        case ActionType.Username:
            AsyncStorage.setItem("username", action.payload.username);

            return { ...state, username: action.payload.username }


        case ActionType.Logout:
            AsyncStorage.removeItem('username');
            AsyncStorage.removeItem('avatar');

            return initialState;

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