import { useContext } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { LikeButton, CommentButton } from "../../components/widgets/IconButtons";
import { CommentInput } from "./components/CommentInput";
import { UserAvatar } from "../../components/widgets/Avatar";
import { Comments } from "./components/Comments";
import { Spacer } from '../../components/widgets/Spacer';
import defaultAvatar from '../../assets/default_avatar.jpg';
import { UserContext } from "../../state/Context";

const PostDetailScreen = (props) => {
    const { postURI, caption, post_id } = props.route.params;
    const appContext = useContext(UserContext);
    const { avatar, username } = appContext.state;

    return (
        <View style={style.postContainer}>
            <View style={style.postHeader}>
                <UserAvatar
                    size="small"
                    source={avatar ? { uri: avatar } : defaultAvatar}
                />
                <Text style={style.username}>{username ? username : "Username"}</Text>
            </View>
            <Image source={{ uri: postURI }} style={style.detailPhoto}></Image>
            <ScrollView>
                <View style={{ padding: 10 }}>
                    <View style={style.iconsRow}>
                        <LikeButton />
                        <CommentButton />
                    </View>
                    <Text style={style.caption}>{caption}</Text>
                    <Spacer height={caption != "" ? 25 : 0} />
                    <Comments postId={post_id} />
                </View>
            </ScrollView>
            <CommentInput postId={post_id} />
        </View >
    )
}

const style = StyleSheet.create({
    detailPhoto: {
        width: '100%',
        height: 350,
        resizeMode: 'cover'
    },
    postContainer: {
        backgroundColor: 'black',
        height: '100%'
    },
    iconsRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    postHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        paddingLeft: 10,
    },
    username: {
        flex: 1,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingLeft: 10,
        color: "white"
    },
    caption: {
        paddingTop: 5,
        color: 'white',
    }
});

export default PostDetailScreen;