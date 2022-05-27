import { Text, View, StyleSheet } from "react-native";
import { UserAvatar } from "../../../components/widgets/Avatar";
import defaultAvatar from '../../../assets/default_avatar.jpg';

export const Comments = () => {
    return (
        <View style={style.commentsList}>
            <UserAvatar
                size="small"
                source={defaultAvatar}
            />
            <Text style={style.username}>Thomas</Text>
            <View style={{ flex: 1 }}>
                <Text style={style.comment}>This is a random comment.</Text>
            </View>
        </View>
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