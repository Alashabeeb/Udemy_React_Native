import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather 
                name="search" 
                style={styles.iconStyle}
            />
            <TextInput 
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                value={term}
                onChangeText={(newTerm) => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: "row"
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 10
    }
})

export default SearchBar