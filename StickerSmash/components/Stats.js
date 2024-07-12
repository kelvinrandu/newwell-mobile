import React from 'react';
import { View, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


const users = [
    {
        name: 'brynn',
        avatar: 'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    },
    {
        name: 'thot leader',
        avatar:
            'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    },
    {
        name: 'jsa',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
        name: 'talhaconcepts',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
        name: 'andy vitale',
        avatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
    },
    {
        name: 'katy friedson',
        avatar:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
    },
];
const data = {
    labels: ["Kenya", "Ghana", "USA"], // optional
    data: [0.4, 0.6, 0.8]
};
const data2 = {
    labels: ["Uwepo", "Tradelic", "Mardi",],
    datasets: [
        {
            data: [20, 45, 28]
        }
    ]
};


const Stats = () => {
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
               
                    <Card containerStyle={{ marginTop: 17, padding: 20, borderRadius: 10 }}>
                    <Text style={{ paddingBottom: 20 }}>Top Songs</Text>
                        {/* <Card.Divider /> */}
                        <BarChart
                            //   style={graphStyle}
                            data={data2}
                            width={300}
                            height={220}
                            yAxisLabel=""
                            chartConfig={{
                                backgroundColor: "#e26a00",
                                backgroundGradientFrom: "#99e699",
                                backgroundGradientTo: "#145214",
                                decimalPlaces: 1, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: "#ffa726"
                                }
                            }}
                            verticalLabelRotation={30}
                        />

                    </Card>

                    <Card containerStyle={{ marginTop: 17, padding: 20, borderRadius: 10 }}>
                        <View>
                            <Text style={{ paddingBottom: 20 }} >New Listeners by month</Text>
                            <LineChart
                                data={{
                                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
                                    datasets: [
                                        {
                                            data: [
                                                Math.random() * 10,
                                                Math.random() * 10,
                                                Math.random() * 10,
                                                Math.random() * 10,
                                                Math.random() * 10,
                                                Math.random() * 10,
                                            ]
                                        }
                                    ]
                                }}
                                width={300} // from react-native
                                height={220}
                                yAxisLabel=""
                                yAxisSuffix="k"
                                yAxisInterval={1} // optional, defaults to 1
                                chartConfig={{
                                    backgroundColor: "#e26a00",
                                    backgroundGradientFrom: "#fb8c00",
                                    backgroundGradientTo: "#ffa726",
                                    decimalPlaces: 1, // optional, defaults to 2dp
                                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    style: {
                                        borderRadius: 16
                                    },
                                    propsForDots: {
                                        r: "6",
                                        strokeWidth: "2",
                                        stroke: "#ffa726"
                                    }
                                }}
                                bezier
                                style={{
                                    marginVertical: 8,
                                    borderRadius: 16
                                }}
                            />
                        </View>


                    </Card>
                    <Card containerStyle={{ marginTop: 17, padding: 20, borderRadius: 10 }}>
                        <View>
                            <Text style={{ paddingBottom: 20 }}>Streams by Country</Text>
                            <ProgressChart
                                data={data}
                                width={300}
                                height={220}
                                strokeWidth={16}
                                radius={32}
                                chartConfig={{
                                    backgroundColor: "#e26a00",
                                    backgroundGradientFrom: "#b3c6ff",
                                    backgroundGradientTo: "#4d79ff",
                                    decimalPlaces: 1, // optional, defaults to 2dp
                                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    style: {
                                        borderRadius: 16
                                    },
                                    propsForDots: {
                                        r: "6",
                                        strokeWidth: "2",
                                        stroke: "#ffa726"
                                    }
                                }}
                                hideLegend={false}
                            />

                        </View>


                    </Card>

                    <Card containerStyle={{ marginBottom: 20, marginTop: 17, padding: 20, borderRadius: 10 }}>

                        <View style={styles.display}>
                            <Text style={styles.fonts2} h5>Most Value Payer</Text>
                            {/* <Button title="Clear" type="clear" /> */}
                        </View>

                        {users.map((u, i) => {
                            return (
                                <View key={i} style={styles.user}>
                                    <Image
                                        style={styles.image}
                                        resizeMode="cover"
                                        source={{ uri: u.avatar }}
                                    />
                                    <Text style={styles.name}>{u.name}</Text>
                                </View>
                            );
                        })}
                    </Card>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fonts: {
        marginBottom: 8,
    },
    fonts2: {
        fontWeight: 800,
        fontSize: 18,
        paddingBottom: 6
    },
    fonts3: {
        fontWeight: 600,
        fontSize: 18,
        paddingBottom: 6
    },
    button: {
        borderRadius: 20,
        color: 'black'

    },
    button2: {
        color: 'rgba(252, 104, 115, 1)',
        backgroundColor: 'rgba(255, 219, 225, 1)'

    },

    display: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    display3: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    display2: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 40,
        paddingRight: 40
    }
    ,
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        borderRadius:20,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
});

export default Stats;