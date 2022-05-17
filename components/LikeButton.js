import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const LikeButton = () => {
    const [liked, setLiked] = useState(false)

    return (
        <TouchableOpacity onPress={() => setLiked((isLiked) => !isLiked)}>
            <Icon
                name={liked ? "heart" : "heart-outline"}
                size={32}
                color={liked ? "#FC1605" : "#FFFFFF"}
            />
        </TouchableOpacity>
    )
}

export default LikeButton;