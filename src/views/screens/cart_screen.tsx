import { StyleSheet, Text, View } from "react-native";

const CartScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Cart</Text>
        </View>
    );
}

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});