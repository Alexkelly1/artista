import {
    View,
    TextInput, KeyboardAvoidingView,
    TouchableHighlight,
    StyleSheet
} from "react-native";
import { UserAvatar } from '../../../components/widgets/Avatar';
import defaultAvatar from '../../../assets/default_avatar.jpg';
import Icon from 'react-native-vector-icons/Ionicons';

export const CommentInput = () => (
    <KeyboardAvoidingView behavior='position'>
        <View style={style.commentContainer}>
            <UserAvatar
                size="small"
                source={defaultAvatar}
            />
            <TextInput
                style={style.commentInput}
                placeholder="Add a comment..."
                placeholderTextColor={'#c4c4c4'}
            />
            <TouchableHighlight>
                <Icon name="send"
                    size={25}
                    color="white"
                />
            </TouchableHighlight>
        </View>
    </KeyboardAvoidingView>
)

const style = StyleSheet.create({
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