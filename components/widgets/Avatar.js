import { Avatar } from "react-native-elements";

export const UserAvatar = ({ size, source, onPressed }) =>
    <Avatar
        onPress={onPressed}
        size={size}
        rounded
        source={source}
    />