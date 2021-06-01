import firebase from 'firebase'
import config from '../config'

const firebaseConfig = {
    apiKey: "AIzaSyB0TdDLFEcg6WxSMvANSLUoZkBoVOfwVNo",
    authDomain: "currency-77811.firebaseapp.com",
    projectId: "currency-77811",
    storageBucket: "currency-77811.appspot.com",
    messagingSenderId: "546620874335",
    appId: "1:546620874335:web:0f8cd80d88ce44ebf405ea",
    measurementId: "G-FK943TG3D9"
}

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase