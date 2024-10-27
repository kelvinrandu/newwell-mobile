/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {
  // Button,
   StyleSheet, Text, TextInput,ToastAndroid, View} from 'react-native';
   import { Button } from 'react-native-paper';
   import { useAuth } from "../../context/AuthContext";
   import { useToast } from "react-native-toast-notifications";

// const URL_KEY = 'API2axhtoc6oUxm';
// const TOKEN_KEY = 'SVVLMwejKKlqmgf9LV255fWOmEeLLEYM41O1Ma1rIZ6B';

export default function Login () {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [isLoading, setIsloading] = useState(false);
  const navigation = useNavigation();
  const {colors} = useTheme();
  const toast = useToast();
  const{authState,onLogut,onLogin } =useAuth();

  const login = async () => { 
    setIsloading(true)
    const results = await onLogin( email.value,password.value)
    console.log('results',results)
    if(results?.error){
        toast.show("Login unsuccesful", {
          type: "danger",
          placement: "top",
          duration: 4000,
          offset: 30,
          animationType: "slide-in",
        });

    }else{
      toast.show("Otp sent", {
        type: "success",
        placement: "top",
        duration: 4000,
        offset: 30,
        animationType: "slide-in",
      });
      setIsloading(false)
      // const results = await onLogin( email.value,password.value)
      navigation.navigate('OtpPage',{
        email:email.value,
      })

    }
    // axios.post('https://nfa.newwell.app/api/auth/jwt-signin', {
    //   email: email.value,
    //   password: password.value
    // })
    // .then(function (response) {
    //   console.log('response',response.data);
    //   console.log(response?.data['jwt'])
    //   // response?.data['jwt']? console.log('login successfull'):console.log('wrong credentials')

    //   if(response?.data['jwt']){
    //     // toast.show("Login succesful", {
    //     //   type: "success",
    //     //   placement: "top",
    //     //   duration: 4000,
    //     //   offset: 30,
    //     //   animationType: "slide-in",
    //     // });
    // //     navigation.reset({
    // //   index: 0,
    // //   routes: [{ name: 'Dashboard' }],
    // // })

    //   }
    //   else{
    //     // toast.show("Login unsuccesful", {
    //     //   type: "danger",
    //     //   placement: "top",
    //     //   duration: 4000,
    //     //   offset: 30,
    //     //   animationType: "slide-in",
    //     // });

    //   }
    // })
    // .catch(function (error) {
    //   console.log('eror',error);
    // });
    

  }


  return (
    <View style={styles.container}>
       <Text textAlign='left' style={{color: colors.text,fontSize:20,fontWeight:800, paddingBottom:180}}>Newwell for Artists</Text>
      <Text textAlign='left' style={{color: colors.text}}>Email Adress</Text>
      <TextInput
        style={{
          color: colors.text,
          borderColor: colors.border,
          borderRadius:10,
          ...styles.input,
        }}
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Text textAlign='left' style={{color: colors.text,alignItems:'flex-start',alignContent:'flex-start',textAlign:'left',justifyContent:'flex-start'}}>Password</Text>
      <TextInput
       autoCapitalize={'none'}
       autoCorrect={false}
       secureTextEntry={true}
       textContentType={'password'}
        style={{
          color: colors.text,
          borderRadius:10,
          borderColor: colors.border,
          ...styles.input,
        }}
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
     
      />
      <Text  textAlign='left' style={{color: colors.text,paddingBottom:20}}>Forgot Password</Text>

        <Button loading={isLoading} buttonColor='#F47133' style={{width: '100%', marginLeft: 0,borderRadius:10}} mode="contained"
        //  onPress={() =>   navigation.navigate('OtpPage')}
        onPress={login}
         >
        Sign In
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
    paddingBottom:200
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
