import { Text, View, StyleSheet } from "react-native";
import { UserAvatar } from "../../../components/widgets/Avatar";
import defaultAvatar from '../../../assets/default_avatar.jpg';
import { fetchFirestoreDoc } from '../../../firebase/network/firestoreDoc';
import { useState, useEffect } from "react";

// Required: postID
export const Comments = () => {
    const [commentList, setCommentList] = useState([]);
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState(null);
    const directory = "users";

    useEffect(() => fetchFirestoreDoc(directory)
        .then(user => {
            setUsername(user.name)
            setAvatar(user.avatar);
            setCommentList(user.comments || [])
        }), []);

    const comments = commentList.map((item, i) => (
        <View key={i} style={style.commentsList}>
            <UserAvatar
                size="small"
                source={avatar ? { uri: avatar } : defaultAvatar}
            />
            <Text style={style.username}>{username}</Text>
            <View style={{ flex: 1 }}>
                <Text style={style.comment}>{item.comment}</Text>
            </View>
        </View>
    )
    );

    return (
        <>
            {commentList.length != 0 ?
                comments
                : (
                    <>
                        <Text>No comments found for this post.</Text>
                    </>
                )}
        </>
    )
}

const style = StyleSheet.create({
    commentsList: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 15
    },
    comment: {
        fontSize: 13,
        color: "white",
        paddingLeft: 5,
        marginTop: 8,
    },
    username: {
        marginTop: 8,
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'left',
        color: "white",
        paddingLeft: 12,
    }
});