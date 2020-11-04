import { Alert } from "react-native";

export default function createThreeButtonAlert(message, onPress) {
  Alert.alert("", message, [{ text: "OK", onPress: onPress }], {
    cancelable: false,
  });
}
