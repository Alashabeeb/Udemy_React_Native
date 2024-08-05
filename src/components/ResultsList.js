import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultsDetail from "../components/ResultsDetail";
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({ title, results }) => { // Remove navigation from props
    const navigation = useNavigation(); // Use the hook inside the component

    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate("ResultsShow", { id: item.id })} // Correct screen name
                        >
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,
    },
});

export default ResultsList;
