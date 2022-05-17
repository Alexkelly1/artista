import { View } from "react-native"

export const Spacer = ({ height }) => (
    <View style={{ height: height ?? 0 }} />
);