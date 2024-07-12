/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import { router } from 'expo-router';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';


// const URL_KEY = 'API2axhtoc6oUxm';
// const TOKEN_KEY = 'SVVLMwejKKlqmgf9LV255fWOmEeLLEYM41O1Ma1rIZ6B';

export const Login = () => {
  const [partipantName, setParticipantName] = useState('');
  const [roomName, setRoomName] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const navigation = useNavigation();
  const {colors} = useTheme();


  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>LOGIN</Text>
      <TextInput
        style={{
          color: colors.text,
          borderColor: colors.border,
          ...styles.input,
        }}
        onChangeText={setParticipantName}
        value={partipantName}
      />

      <Text style={{color: colors.text}}>Room Name</Text>
      <TextInput
        style={{
          color: colors.text,
          borderColor: colors.border,
          ...styles.input,
        }}
        // onChangeText={setRoomName}
        value={roomName}
      />
      {isLoading ? (
        <Button color={'red'} title="Connecting.." />
      ) : (
        <Button color={'red'} title="Connect" onPress={()=> 
          navigation.navigate('OtpPage')
         
        }
          />
      )}

      <View style={styles.spacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  spacer: {
    height: 10,
  },
});
