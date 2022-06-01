import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomAppButton } from "../../../components/widgets/AppButton";
import { Spacer } from "../../../components/widgets/Spacer";
import { singularPhotoUpload, singularPhotoDownload } from "../../../firebase/network/singluarPhoto";
import defaultAvatar from '../../../assets/default_avatar.jpg';
import * as ImagePicker from 'expo-image-picker';
import { UserAvatar } from "../../../components/widgets/Avatar";
import { UserContext, ActionType } from "../../../state/Context";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
export const ProfileHeader = ({ postAmount, navigation }) => {
    const directory = `user-avatars`;

    const appContext = useContext(UserContext);
    const { avatar, username } = appContext.state;

    const launchDeviceGallery = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.cancelled) handleUploadAndDownload(result.uri);
    };

    const handleUploadAndDownload = async (uri) => {
        await singularPhotoUpload({ directory }, uri);

        singularPhotoDownload({ directory })
            .then(uri => {
                appContext.dispatch({
                    type: ActionType.Avatar,
                    payload: {
                        avatar: uri
                    }
                });
            });
    };

    const signOutFirebaseUser = () => {
        // signOut(auth).then(() => {
        //     appContext.dispatch({ type: ActionType.Logout });
        //     console.log("Logging Out")
        //     navigation.navigate('Landing');
        // })
        //     .catch(err => console.log(err));
    }

    return (
        <View style={{ backgroundColor: 'black' }}>
            <SafeAreaView>
                <View style={style.flexContainer} >
                    <View style={style.gridRow}>
                        <UserAvatar
                            size="medium"
                            source={avatar ? { uri: avatar } : defaultAvatar}
                            onPressed={() => launchDeviceGallery()}
                        />
                        <Text
                            numberOfLines={1}
                            style={style.username}>{username ? username : "Username"}</Text>
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
                    <CustomAppButton onPress={signOutFirebaseUser()} title="Log out" />
                </View>
            </SafeAreaView >
        </View >
    )
}

const style = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "black",
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
        color: "white"
    },
    amount: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "white"
    },
    postText: {
        fontSize: 15,
        textAlign: 'center',
        color: "white"
    },
});