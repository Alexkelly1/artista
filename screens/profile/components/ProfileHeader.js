import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "react-native-elements";
import { CustomAppButton } from "../../../components/widgets/AppButton";
import { Spacer } from "../../../components/widgets/Spacer";
import profileTest from '../../../assets/profile_test.jpg';
import * as ImagePicker from 'expo-image-picker';

export const ProfileHeader = ({ postAmount }) => {

    const [avatar, setAvatar] = useState(profileTest)
    const [image, setImage] = useState(null);
  
    useEffect(() => {
      (async () => {
        const { galleryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        setHasGalleryPermission(galleryStatus.status === 'granted');
      })();
    }, []);
  
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        });
        console.log(result);
  
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
  
    const editAvatar = () => {
        (avatar) => setAvatar(avatar)
        pickImage()
    }

    return (
        <View style={{ backgroundColor: 'white' }}>
            <SafeAreaView>
                <View style={style.flexContainer} >
                    <View style={style.gridRow}>
                        <Avatar
                            onPress={() => editAvatar()}
                            size="medium"
                            rounded
                            source={avatar}
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