import { StyleSheet } from "react-native";
import { View, Image } from "react-native";

const PostDetailScreen = (props) => {
    const { postURI } = props.route.params;

    return (
        <View>
            <Image source={{ uri: postURI }} style={style.detailPhoto}></Image>
        </View>
    )
}

const style = StyleSheet.create({
    detailPhoto: {
        width: '100%',
        height: 350,
        resizeMode: 'cover'
    }
});

export default PostDetailScreen;