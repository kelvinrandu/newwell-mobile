import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Image, TextInput, Pressable ,Platform} from 'react-native';
import { Text, Button, Card, Icon } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';
import { useTheme } from '@react-navigation/native';

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



const CreateRelease = () => {
    const { colors } = useTheme();
    const [partipantName, setParticipantName] = useState('');
    const [roomName, setRoomName] = useState('');
    const [image, setImage] = useState(null);
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const libraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (libraryStatus.status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }

                const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
                if (cameraStatus.status !== 'granted') {
                    alert('Sorry, we need camera permissions to make this work!');
                }
            }
        })();
    }, []);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result?.cancelled) {
            setImage(result.uri);
        }
    };


    return (
        <>
            
                <View style={styles.container}>
                    <Text style={styles.fonts2} h4>  Title:  {partipantName}</Text>
                    <Card containerStyle={{ marginTop: 17, padding: 20, borderRadius: 10 }}>
                        <Text textAlign='left' style={{ color: colors.text }}>Title</Text>
                        <TextInput
                            style={{
                                color: colors.text,
                                borderColor: colors.border,
                                borderRadius: 10,
                                ...styles.input,
                            }}
                            onChangeText={setParticipantName}
                            type='email'
                            value={partipantName}
                        />
                        <Text textAlign='left' style={{ color: colors.text }}>Type</Text>
                        <TextInput
                            style={{
                                color: colors.text,
                                borderColor: colors.border,
                                borderRadius: 10,
                                ...styles.input,
                            }}
                            // onChangeText={setParticipantName}
                            type='email'
                        // value={partipantName}
                        />
                        <Text textAlign='left' style={{ color: colors.text }}>Genre</Text>
                        <TextInput
                            style={{
                                color: colors.text,
                                borderColor: colors.border,
                                borderRadius: 10,
                                ...styles.input,
                            }}
                            // onChangeText={setParticipantName}
                            type='email'
                        // value={partipantName}
                        />
                    </Card>

                    <Card containerStyle={{ marginTop: 17, padding: 20, borderRadius: 10 }}>
                        <Text textAlign='left' style={{ color: colors.text }}>Title</Text>
                        <TextInput
                            style={{
                                color: colors.text,
                                borderColor: colors.border,
                                borderRadius: 10,
                                ...styles.input,
                            }}
                            // onChangeText={setParticipantName}
                            type='email'
                        // value={partipantName}
                        />
                        <Text textAlign='left' style={{ color: colors.text }}>Type</Text>
                        <TextInput
                            style={{
                                color: colors.text,
                                borderColor: colors.border,
                                borderRadius: 10,
                                ...styles.input,
                            }}
                            // onChangeText={setParticipantName}
                            type='email'
                        // value={partipantName}
                        />
                        <Text textAlign='left' style={{ color: colors.text }}>Genre</Text>
                        <TextInput
                            style={{
                                color: colors.text,
                                borderColor: colors.border,
                                borderRadius: 10,
                                ...styles.input,
                            }}
                            // onChangeText={setParticipantName}
                            type='email'
                        // value={partipantName}
                        />
                        <Text textAlign='left' style={{ color: colors.text }}>Title</Text>
                        <TextInput
                            style={{
                                color: colors.text,
                                borderColor: colors.border,
                                borderRadius: 10,
                                ...styles.input,
                            }}
                            // onChangeText={setParticipantName}
                            type='email'
                        // value={partipantName}
                        />
                        <Text textAlign='left' style={{ color: colors.text }}>Type</Text>
                        <TextInput
                            style={{
                                color: colors.text,
                                borderColor: colors.border,
                                borderRadius: 10,
                                ...styles.input,
                            }}
                            // onChangeText={setParticipantName}
                            type='email'
                        // value={partipantName}
                        />
                        <Text textAlign='left' style={{ color: colors.text }}>Genre</Text>
                        <TextInput
                            style={{
                                color: colors.text,
                                borderColor: colors.border,
                                borderRadius: 10,
                                ...styles.input,
                            }}
                            // onChangeText={setParticipantName}
                            type='email'
                        // value={partipantName}
                        />
                        <Text textAlign='left' style={{ color: colors.text }}>Genre</Text>
                        <TextInput
                            style={{
                                color: colors.text,
                                borderColor: colors.border,
                                borderRadius: 10,
                                ...styles.input,
                            }}
                            // onChangeText={setParticipantName}
                            type='email'
                        // value={partipantName}
                        />

                    </Card>

                    <Card containerStyle={{ marginTop: 17, padding: 20, borderRadius: 10 }}>
                        <Text style={styles.fonts2} h5>Media Uploader</Text>
                        {/* <Card.Divider /> */}
                        {/* <Button title="Pick" onPress={pickImage} /> */}
                        <Button buttonStyle={{

                            height: 250,
                            borderRadius: 20,
                            opacity: 0.2
                        }} borderRadius={'20px'} onPress={pickImage} type='outline'> 1400 X 1400 px .jgp</Button>
                        {image && <Image source={{ uri: image }} style={styles.image} />}

                        <Text style={{ fontSize: 18, marginBottom: 10, color: '#003F5C', padding: 25 }}>Cover Art</Text>
                        <Button buttonStyle={{
                            height: 250,

                            borderRadius: 20,
                            opacity: 0.2
                        }} borderRadius={'20px'} onPress={pickImage} type='outline'> Lossless.WAV</Button>
                        {image && <Image source={{ uri: image }} style={styles.image} />}

                        <Text style={{ fontSize: 18, marginBottom: 10, color: '#003F5C', padding: 25 }}>Track</Text>



                    </Card>

                    <Card containerStyle={{ marginTop: 17, padding: 20, borderRadius: 10 }}>
                        <Text textAlign='left' style={{ color: colors.text }}>Title</Text>
                        <TextInput
                            style={{
                                color: colors.text,
                                borderColor: colors.border,
                                borderRadius: 10,
                                ...styles.input,
                            }}
                            // onChangeText={setParticipantName}
                            type='email'
                        // value={partipantName}
                        />
                        <Text textAlign='left' style={{ color: colors.text }}>Type</Text>
                        <TextInput
                            style={{
                                color: colors.text,
                                borderColor: colors.border,
                                borderRadius: 10,
                                ...styles.input,
                            }}
                            // onChangeText={setParticipantName}
                            type='email'
                        // value={partipantName}
                        />
                        <Text textAlign='left' style={{ color: colors.text }}>Genre</Text>
                        <TextInput
                            style={{
                                color: colors.text,
                                borderColor: colors.border,
                                borderRadius: 10,
                                ...styles.input,
                            }}
                            // onChangeText={setParticipantName}
                            type='email'
                        // value={partipantName}
                        />
                        <Text textAlign='left' style={{ color: colors.text }}>Title</Text>
                        <TextInput
                            style={{
                                color: colors.text,
                                borderColor: colors.border,
                                borderRadius: 10,
                                ...styles.input,
                            }}
                            // onChangeText={setParticipantName}
                            type='email'
                        // value={partipantName}
                        />
                        <Text textAlign='left' style={{ color: colors.text }}>Type</Text>
                        <TextInput
                            style={{
                                color: colors.text,
                                borderColor: colors.border,
                                borderRadius: 10,
                                ...styles.input,
                            }}
                            // onChangeText={setParticipantName}
                            type='email'
                        // value={partipantName}
                        />
                        <Text textAlign='left' style={{ color: colors.text }}>Genre</Text>
                        <TextInput
                            style={{
                                color: colors.text,
                                borderColor: colors.border,
                                borderRadius: 10,
                                ...styles.input,
                            }}
                            // onChangeText={setParticipantName}
                            type='email'
                        // value={partipantName}
                        />

                    </Card>
                    

                </View>
         
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
    fonts: {
        marginBottom: 8,
    },
    fonts2: {
        fontWeight: 800,
        fontSize: 18,
        paddingBottom: 6
    },
    input: {
        width: '100%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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

export default CreateRelease;