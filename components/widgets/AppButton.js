import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export const CustomAppButton = ({ title, onPress }) => (
    <TouchableOpacity onPress={() => onPress ?? console.log("Clicked")}>
        <View style={style.customAppButton}>
            <Text>{title ?? ""}</Text>
        </View>
    </TouchableOpacity>
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
    }
});
