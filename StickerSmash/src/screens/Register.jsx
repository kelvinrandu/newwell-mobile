/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { router } from 'expo-router';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {
  // Button,
  StyleSheet, Text, TextInput, ToastAndroid, View
} from 'react-native';
import { Button } from 'react-native-paper';
import { useAuth } from "../../context/AuthContext";
import { useToast } from "react-native-toast-notifications";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const navigation = useNavigation();
  const toast = useToast();
  const { onRegister, onLogin } = useAuth();
  const { colors } = useTheme();

  const register = async () => {
    setIsloading(true)
    const results = await onRegister(email, password)
    console.log('results', results.data)
    if (results.data !== "success") {
      toast.show("Register unsuccesful", {
        type: "danger",
        placement: "top",
        duration: 4000,
        offset: 30,
        animationType: "slide-in",
      });

    } else {



      const results = await onLogin(email, password)
      if (results?.error) {
        toast.show("Register unsuccesful", {
          type: "danger",
          placement: "top",
          duration: 4000,
          offset: 30,
          animationType: "slide-in",
        });

      } else {
        toast.show("Register successful", {
          type: "success",
          placement: "top",
          duration: 4000,
          offset: 30,
          animationType: "slide-in",
        });
      navigation.navigate('OtpPage', {
        email: email,
      })

    }


    setIsloading(false)
  }

  }
  return (
    <View style={styles.container}>
      <Text textAlign='left' style={{ color: colors.text, fontSize: 20, fontWeight: 800, paddingBottom: 100 }}>Create Account</Text>
      <Text textAlign='left' style={{ color: colors.text }}>Email Adress</Text>
      <TextInput
        style={{
          color: colors.text,
          textAlign: 'left',
          borderColor: colors.border,
          borderRadius: 10,
          ...styles.input,
        }}
        onChangeText={setEmail}
        type='email'
        value={email}
      />

      <Text textAlign='left' style={{ color: colors.text, alignItems: 'flex-start', alignContent: 'flex-start', textAlign: 'left', justifyContent: 'flex-start' }}>Password</Text>
      <TextInput
        autoCapitalize={'none'}
        autoCorrect={false}
        secureTextEntry={true}
        textContentType={'password'}
        style={{
          color: colors.text,
          borderRadius: 10,
          borderColor: colors.border,
          ...styles.input,
        }}

        onChangeText={setPassword}
        value={password}
      />
      <Text textAlign='left' style={{ color: colors.text, alignItems: 'flex-start', alignContent: 'flex-start', textAlign: 'left', justifyContent: 'flex-start' }}>Confirm Password</Text>
      <TextInput
        autoCapitalize={'none'}
        autoCorrect={false}
        secureTextEntry={true}
        textContentType={'password'}
        style={{
          color: colors.text,
          borderRadius: 10,
          borderColor: colors.border,
          ...styles.input,
        }}

        onChangeText={setCPassword}
        value={cPassword}
      />

      {/* {isLoading ? (
        <Button color={'red'} title="Connecting.." />
      ) : (
        <Button containerViewStyle={{width: '100%', marginLeft: 0}} borderRadius={10} style={{width:'80%',borderRadius:20}} color={'red'} title="Sign In" onPress={()=> 
          navigation.navigate('OtpPage')
         
        }
          />
      )} */}
      <Button loading={isLoading} disabled={isLoading} buttonColor='#F47133' style={{ width: '100%', marginLeft: 0, marginTop: 10, borderRadius: 10 }} mode="contained"
        // onPress={() =>   navigation.navigate('OtpPage')}
        onPress={register}
      >
        Register
      </Button>

      <View style={styles.spacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 200
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
