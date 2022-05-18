import { View, StyleSheet, Text } from "react-native";

export const CustomAppButton = ({ text }) => (
    <View style={style.customAppButton}>
        <Text style={{color: "white"}}>{text ?? ""}</Text>
    </View>
)

const style = StyleSheet.create({
    customAppButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 10,
        borderColor: "white"
    }
});
