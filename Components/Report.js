import * as React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Feather from 'react-native-vector-icons/Feather'
import All from './All';
import Counter from './Counter';
import Delivery from './Delivery';
import PickUp from './PickUp'

const { width, height } = Dimensions.get("window")

export default class TabViewExample extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'all', title: 'All' },
            { key: 'counter', title: 'Counter' },
            { key: 'delivery', title: 'Delivery' },
            { key: 'pickup', title: 'PickUp' },
        ],
    };

    render() {
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.topContainer}>

                        <TouchableOpacity style={styles.menu} onPress={() => props.navigation.toggleDrawer()}>

                            <Feather
                                style={{
                                    marginRight: 15
                                }} name="menu"
                                size={30}
                                color="#fff"

                            />

                        </TouchableOpacity>
                        <Text style={styles.text}>Reports</Text>
                        <View style={styles.weekContainer}>
                            <View style={styles.weeksCard}>
                                <Text style={{ color: "#fff", fontSize: 14, padding: 5 }}>Today</Text>
                            </View>
                            <View style={styles.weeksCard}>
                                <Text style={{ color: "#fff", fontSize: 14, padding: 5 }}>Yestarday</Text>
                            </View>
                            <View style={styles.weeksCard}>
                                <Text style={{ color: "#fff", fontSize: 14, padding: 5 }}>This Week</Text>
                            </View>
                            <View style={styles.weeksCard}>
                                <Text style={{ color: "#fff", fontSize: 14, padding: 5 }}>This Month</Text>
                            </View>


                        </View>
                    </View>
                </View>
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        all: All,
                        counter: Counter,
                        delivery: Delivery,
                        pickup: PickUp

                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width }}
                />
            </>
        );
    }
}


const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    container: {
        width,
    },
    menu: {
        position: "absolute",
        marginLeft: 20,
        marginTop: 30
    },
    topContainer: {
        height: 150,
        backgroundColor: "#423661",

    },
    text: {
        marginTop: 30,
        marginLeft: 120,
        fontSize: 20,
        color: "#fff",
        fontWeight: "600"

    },
    weekContainer: {
        marginTop: 30,
        height: 50,
        width: width - 20,
        flexDirection: "row",
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "space-between"



    },
    weeksCard: {
        borderRadius: 30,
        width: 85,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#8f7cbf"

    }
});