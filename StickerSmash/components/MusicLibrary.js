import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

const users = [
    {
        name: 'brynn',
        avatar:'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
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



const MusicLibrary = () => {
    return (
        <>
            <ScrollView>
                <View style={styles.container}>

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
{/* 
                        <View style={styles.display}>
                            <Text style={styles.fonts2} h5>Notifications</Text>
                            <Button title="Clear" type="clear" />
                        </View> */}

                        {users.map((u, i) => {
                            return (
                                <View key={i} style={styles.user}>
                                    <Image
                                        style={styles.image}
                                        resizeMode="cover"
                                        source={{ uri: u.avatar }}
                                    />
                                    <View>
                                    <Text style={styles.name}>{u.name}</Text>
                                        </View>
                                  
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
        width: 60,
        height: 60,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
});

export default MusicLibrary;