import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

const users = [
    {
        name: 'brynn',
        avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    },
    {
        name: 'thot leader',
        avatar:
            'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    },
    {
        name: 'jsa',
        avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
    },
    {
        name: 'talhaconcepts',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
        name: 'andy vitale',
        avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
    },
    {
        name: 'katy friedson',
        avatar:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
    },
];



const Services = () => {
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                <Card containerStyle={{ backgroundColor:'#E5F7FF', marginTop: 17, padding: 20, borderRadius: 10 }}>
                        <Text style={styles.fonts} h4>Distribute Lyrics </Text>
                        {/* <Card.Divider /> */}
                        <Text style={styles.fonts}>Lyrics on MusixMatch and Shazam</Text>
                        <View style={styles.display}>
                      
                        </View>
                        
                        <View style={styles.display3}>
                            <Button buttonStyle={{


                                borderRadius: 20,
                            }}
                                // titleStyle={{ color: 'rgba(252, 104, 115, 1)', fontWeight: '700' }} 
                                type='outline' style={styles.button2}>
                                Start Now
                            </Button>
                           
                        </View>

                    </Card>
                    <Card containerStyle={{ marginTop: 17,backgroundColor:'#ECEAFE', padding: 20, borderRadius: 10 }}>
                        <Text style={styles.fonts} h4>Content Copyrights</Text>
                        {/* <Card.Divider /> */}
                        <Text style={styles.fonts}>Register content ownership
                        Available in selected regions</Text>
                        <View style={styles.display}>
                        
                        </View>
                        
                        <View style={styles.display3}>
                            <Button buttonStyle={{


                                borderRadius: 20,
                            }}
                                // titleStyle={{ color: 'rgba(252, 104, 115, 1)', fontWeight: '700' }} 
                                type='outline' style={styles.button2}>
                                   Start Now
                            </Button>
                          
                        </View>

                    </Card>
                    <Card containerStyle={{ marginTop: 17, backgroundColor:'#FFF0E6',padding: 20, borderRadius: 10 }}>
                        <Text style={styles.fonts} h4>Marketing</Text>
                        {/* <Card.Divider /> */}
                        <Text style={styles.fonts}>Smart Links
Content Promotion, 
Air play and Playlisting,
Brand activations.</Text>
                        <View style={styles.display}>
                        
                        </View>
                        
                        <View style={styles.display3}>
                            <Button buttonStyle={{


                                borderRadius: 20,
                            }}
                                // titleStyle={{ color: 'rgba(252, 104, 115, 1)', fontWeight: '700' }} 
                                type='outline' style={styles.button2}>
                                Start Now
                            </Button>
                            
                        </View>

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

export default Services;