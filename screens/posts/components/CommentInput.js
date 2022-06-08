import { useContext, useState } from "react";
import {
    View,
    TextInput, KeyboardAvoidingView,
    TouchableHighlight,
    StyleSheet
} from "react-native";
import { UserAvatar } from '../../../components/widgets/Avatar';
import defaultAvatar from '../../../assets/default_avatar.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import { UserContext } from "../../../state/Context";
import { fetchFirestoreDoc, updateFireStoreDoc } from "../../../firebase/network/firestoreDoc";
import { arrayUnion } from "firebase/firestore";

export const CommentInput = ({ postId }) => {
    const appContext = useContext(UserContext);
    const { avatar } = appContext.state;
    const [comment, setComment] = useState('');
    const commentId = Math.random().toString(15);

    // ToDo: submit post ID
    const submitComment = async () => {
        await fetchFirestoreDoc("users").then(res => console.log("RES: ", res))
        updateFireStoreDoc("users", {
            comments: arrayUnion({
                id: commentId,
                comment: comment,
                postId: postId
            })
        })
    }

    return (
        <KeyboardAvoidingView behavior='position'>
            <View style={style.commentContainer}>
                <UserAvatar
                    size="small"
                    source={avatar ? { uri: avatar } : defaultAvatar}
                />
                <TextInput
                    style={style.commentInput}
                    placeholder="Add a comment..."
                    placeholderTextColor={'#c4c4c4'}
                    onChangeText={(comment) => setComment(comment)}
                />
                <TouchableHighlight onPress={() => submitComment()}>
                    <Icon
                        style={style.sendIcon}
                        name="send"
                        color="white"
                    />
                </TouchableHighlight>
            </View>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    sendIcon: {
        fontSize: 25
    },
    commentContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2b2b2b',
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    commentInput: {
        flex: 1,
        paddingLeft: 15,
        color: 'white'
    },
});