import React, { useState,useEffect } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
// import { setItemToLocalStorage, getItemFromLocalStorage } from '../data/LocalStorage'
import { saveItem, getItem } from '../data/LocalStorage'

import { styles } from '../styles/style'
import { useHistory } from 'react-router-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import firebase from '../../config/firebase'
import axios from 'axios'
import { API_URL } from '@env'
import Loading from '../shared/Loading'
import getInfoAboutCurrenct from '../data/GetData';


const emailImg = require('../../assets/email2.png')
const passwordLock = require('../../assets/passwordLock.png')

export default function SignIn(props) {
    // console.log(API_URL);
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    var [token, setToken] = useState('')


   async function testApi() {
        try {
            const newUser = await axios.post(API_URL + 'user/add/12'  )
                .then(response => {
                    console.log(response.data);
                    
                })

        } catch (error) {
            setLoading(false)
            console.log(error.message)
        }
    }
    
    function login() {
        setLoading(true)
        console.log('click');
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async user => {

                console.log(user.user.uid)
                try {
                    const newUser = await axios.post(API_URL+'user/add/' + user.user.uid)
                        .then(response => {
                            setLoading(false)
                            console.log(response.data.token);
                            saveItem('token',response.data.token);
                            history.push({
                                pathname: '/info',
                                state: { jwt: response.data.token }
                            })
                        })

                } catch (error) {
                    setLoading(false)
                    console.log(error.message)
                }
            })
            .catch(FirebaseAuthException => {
                setLoading(false)
                console.log(FirebaseAuthException)
            })
    }
    return (

        <KeyboardAvoidingView
        >
            <ScrollView
            >
                
                
                <View style={styles.container}>
                {
                    !loading  ?
                    <>
                    <View style={styles.loginView}>
                        <Text style={styles.loginText}>Log in</Text>
                        <View style={styles.Container}>
                            <View style={styles.inputSection}>
                                <TextInput 
                                    style={styles.input}
                                    onChangeText={setEmail}
                                    textAlign='center'
                                    placeholder="Enter Your Email Here"
                                    autoCapitalize='none'
                                    placeholderTextColor="#93a6b1"
                                    // autoCompleteType='email'
                                    keyboardType='email-address'
                                ></TextInput>
                            </View>


                            {/* password  */}

                            <View style={styles.inputSection}>
                                <TextInput 
                                    style={styles.input}
                                    placeholderTextColor="#93a6b1"
                                    textAlign= 'center'
                                    onChangeText={setPassword}
                                    secureTextEntry={true}
                                    placeholder="Enter Your password Here"
                                    varient="oulined"
                                ></TextInput>
                            </View>
                        </View>
                        

                    </View>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => login()} >
                        <Text style={styles.txtBtn} >Sign In</Text>
                    </TouchableOpacity>
                    <Text style={styles.text} >First time here ? <Text style={styles.textSignUp} onPress={() => history.push('/sign-up')}>Sign up</Text></Text>
                    </>
                    :<Loading title="login ..."/>
                    }
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}
