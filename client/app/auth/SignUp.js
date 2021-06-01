import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-native'
import { View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView,Icon } from 'react-native'
import { styles } from '../styles/style'
import firebase from '../../config/firebase'
import BackButton from '../shared/backButton'


const emailImg = require('../../assets/email2.png')
const passwordLock = require('../../assets/passwordLock.png')


export default function SignUp() {
    
    const history = useHistory()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    function signUpUser() {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user =>{
            console.log('created');
            history.push('/')})
        .catch(error =>console.log(error))
      }
    return (

        <KeyboardAvoidingView>
            <ScrollView >
            <BackButton route='/'/>
            <View style={styles.container}>
                    <View style={styles.loginView}>
                        <Text style={styles.loginText1}>Sign Up</Text>
                        <View style={styles.Container}>
                            <View style={styles.inputSection}>
                                <TextInput 
                                    style={styles.input}
                                    placeholderTextColor="#93a6b1"
                                    onChangeText={setEmail}
                                    textAlign= 'center'
                                    placeholder="Enter Your Email Here"
                                    autoCapitalize='none'
                                    // autoCompleteType='email'
                                    keyboardType='email-address'
                                    keyboardAppearance='dark'
                                    returnKeyType='next'
                                    returnKeyLabel='next'
                                ></TextInput>
                            </View>


                            {/* password  */}

                            <View style={styles.inputSection}>
                                <TextInput style={styles.input}
                                    placeholderTextColor="#93a6b1"
                                    onChangeText={setPassword}
                                    textAlign= 'center'
                                    autoCapitalize='none'
                                    secureTextEntry={true}
                                    placeholder="Enter Your password Here"
                                ></TextInput>
                            </View>
                            
                        </View>
                    </View>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => signUpUser()}>
                        <Text style={styles.txtBtn} >Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={styles.text} >Not the first time here ? <Text style={styles.textSignUp}  onPress={() => history.push('/')}>Login</Text></Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}
