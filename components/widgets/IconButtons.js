import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export const LikeButton = () => {
    const [liked, setLiked] = useState(false)

    return (
        <TouchableOpacity onPress={() => setLiked((isLiked) => !isLiked)}>
            <Icon
                name={liked ? "heart" : "heart-outline"}
                size={32}
                color={liked ? "#d13838" : "#FFFFFF"}
            />
        </TouchableOpacity>
    )
}

export const CommentButton = () => {
    return (
        <TouchableOpacity>
            <Icon
                name="chatbubble-outline"
                size={30}
                color="white"
                style={{ paddingLeft: 15 }}
            />
        </TouchableOpacity>
    )
}
