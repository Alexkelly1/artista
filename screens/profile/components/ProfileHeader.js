import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "react-native-elements";
import { CustomAppButton } from "../../../components/widgets/AppButton";
import { Spacer } from "../../../components/widgets/Spacer";
import profileTest from '../../../assets/profile_test.jpg';

export const ProfileHeader = ({ postAmount }) => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <SafeAreaView>
                <View style={style.flexContainer} >
                    <View style={style.gridRow}>
                        <Avatar
                            size="medium"
                            rounded
                            source={profileTest}
                        />
                        <Text
                            numberOfLines={1}
                            style={style.username}>@Username</Text>
                        <View>
                            <Text
                                numberOfLines={1}
                                style={style.amount}>
                                {postAmount}
                            </Text>
                            <Text style={style.postText}>Posts</Text>
                        </View>
                    </View>
                    <Spacer height={20} />
                    <CustomAppButton text="Log out" />
                </View>
            </SafeAreaView >
        </View >
    )
}

const style = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "white",
        paddingHorizontal: 25,
        paddingVertical: 20
    },
    gridRow: {
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    username: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingLeft: 10,
    },
    amount: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    postText: {
        fontSize: 15,
        textAlign: 'center'
    },
});