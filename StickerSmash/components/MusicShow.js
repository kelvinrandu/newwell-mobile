import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';




const MusicShow = () => {
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.fonts2} h4>  music library !</Text>
                    <Card containerStyle={{ marginTop: 17, padding: 20, borderRadius: 10 }}>
                        <Text style={styles.fonts} h3>Ms Anima,</Text>
                        {/* <Card.Divider /> */}
                        <Text style={styles.fonts}>Hope you are good,</Text>
                        <View style={styles.display}>
                            <Text style={styles.fonts}>Account : Basic</Text>
                            <Text style={styles.fonts}>Upgrade</Text>
                        </View>
                        <Text style={styles.fonts}>Your music business in one place and under your control.</Text>
                        <View style={styles.display3}>
                            <Button buttonStyle={{


                                borderRadius: 20,
                            }}
                                // titleStyle={{ color: 'rgba(252, 104, 115, 1)', fontWeight: '700' }} 
                                type='outline' style={styles.button2}>
                                Update your Profile
                            </Button>
                            <Text style={styles.fonts}>Upgrade</Text>
                        </View>

                    </Card>
                    <Card containerStyle={{ marginTop: 17, padding: 20, borderRadius: 10 }}>
                        <Text style={styles.fonts2} h5>My Music Ratings</Text>
                        {/* <Card.Divider /> */}

                        <View style={styles.display2}>
                            <Text style={styles.fonts3}>No Music found!</Text>
                            <Text style={styles.fonts}>Best of the best of,
                                Your music will show here.</Text>

                            <Button buttonStyle={{
                                backgroundColor: 'rgba(255, 219, 225, 1)',
                                color: 'rgba(252, 104, 115, 1)',

                                borderColor: 'transparent',
                                borderWidth: 0,
                                borderRadius: 4,
                            }} titleStyle={{ color: 'rgba(252, 104, 115, 1)', fontWeight: '700' }} type='outline' style={styles.button2}>
                                Start Now
                            </Button>
                        </View>



                    </Card>
                    <Card containerStyle={{ marginTop: 17, padding: 20, borderRadius: 10 }}>
                        <Text style={styles.fonts2} h5>Distribute Lyrics</Text>
                        {/* <Card.Divider /> */}
                        <Text style={styles.fonts}>Lyrics on MusixMatch and Shazam</Text>
                        <View style={styles.display3}>
                            <Button buttonStyle={{


                                borderRadius: 20,
                            }} style={styles.button} type='outline'>
                                Start Now
                            </Button>
                        </View>



                    </Card>
                    <Card containerStyle={{ marginTop: 17, padding: 20, borderRadius: 10 }}>
                        <Text style={styles.fonts2} h5>Music Copyrights</Text>
                        {/* <Card.Divider /> */}
                        <Text style={styles.fonts}>Register content ownership
                            Available in selected regions</Text>
                        <View style={styles.display3}>
                            <Button buttonStyle={{


                                borderRadius: 20,
                            }} borderRadius={'20px'} type='outline'> Start Now</Button>
                        </View>



                    </Card>

                    <Card containerStyle={{ marginBottom: 20, marginTop: 17, padding: 20, borderRadius: 10 }}>

                        <View style={styles.display}>
                            <Text style={styles.fonts2} h5>Notifications</Text>
                            <Button title="Clear" type="clear" />
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
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
});

export default MusicShow;