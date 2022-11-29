
import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Login2 = () => {
  return (
    // <View>
    //   <Login2 />
    // </View>
    <View style={styles.container}>
      <ImageBackground source={require('../images/login2BG.jpg')} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Login</Text>
        <View style={styles.FormContainer}>
            <View style={styles.sectionStyle}>
              <Icon name='email' size={25} style={styles.imageStyle}/>
              <TextInput
                style={{ flex: 1 }}
                placeholder="Enter Your Name Here"
              />
            </View>
            <View style={styles.sectionStyle}>
              <Icon name='email' size={25} style={styles.imageStyle}/>
              <TextInput
                style={{ flex: 1 }}
                placeholder="Enter Your Name Here"
              />
            </View>
            <View style={styles.ButtonContainer}>
              <Button color='#9e0e2f' title='Login' />
            </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  parent: {
    width: 350,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20
  },
  text: {
    color: "#000",
    fontSize: 42,
    fontWeight: "bold",
    marginVertical: 20,
    color: 'white'
  },
  formMain: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  TextInputContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: '#0058bc',
    borderBottomWidth: 2,
    marginBottom: 30,
    height: 50,
    width: 300,
  },
  ButtonContainer: {
    marginVertical: 15,
    height: 50,
    width: 280,
  },
  FormContainer: {
    width: 350,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderWidth: 0.5,
    borderColor: '#eee',
    height: 50,
    borderRadius: 50,
    margin: 10,
  },
  imageStyle: {
    paddingHorizontal: 10,
  },
});

export default Login2;
