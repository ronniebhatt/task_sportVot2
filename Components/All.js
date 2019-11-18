import React from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
const { width, height } = Dimensions.get("window")

const All = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>

                <View style={{ marginTop: 80, marginLeft: 20, alignItems: "center", fontWeight: "800" }}>
                    <Text style={{ fontSize: 30 }}>20</Text>
                    <Text style={{ fontSize: 20 }}>Order Count</Text>
                </View>

                <View style={{ marginTop: 80, marginRight: 20, fontWeight: "800" }}>
                    <Text style={{ fontSize: 30 }}>21556.5</Text>
                    <Text style={{ fontSize: 20 }}>Total Sales</Text>
                </View>

            </View>


            <View style={styles.card}>
                <Text style={{ fontSize: 16, position: "absolute", marginLeft: 20, marginTop: 20 }}>Sales breakUp</Text>

                <View style={{ marginTop: 60, marginLeft: 20, alignItems: "center", fontWeight: "800" }}>
                    <Text style={{ fontSize: 30 }}>20</Text>
                    <Text style={{ fontSize: 20 }}>Order Count</Text>
                </View>

                <View style={{ marginTop: 60, marginRight: 20, fontWeight: "800" }}>
                    <Text style={{ fontSize: 30 }}>21556.5</Text>
                    <Text style={{ fontSize: 20 }}>Total Sales</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        backgroundColor: "#69676e",
        alignItems: "center"
    },
    card: {
        height: 200,
        width: width - 40,
        marginTop: 20,
        backgroundColor: "#fff",
        justifyContent: "space-between",
        flexDirection: "row"
    }

})

export default All
