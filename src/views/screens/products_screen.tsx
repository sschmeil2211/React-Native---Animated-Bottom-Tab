import { StyleSheet, Text, View } from "react-native";

const ProductsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
}

export default ProductsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});