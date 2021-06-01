import { StyleSheet, Dimensions } from 'react-native';
import Constanse from 'expo-constants'
const { height, width } = Dimensions.get("screen")

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        height: height,
        color: 'white',
        alignItems: 'center',
        flex: 1,
        
    },
    text: {
        color: "white",
        marginTop: 15
    },
    img: {
        width: 50,
        height: 50,
    },
    Container :{
        marginTop: 60
    },
    section: {
        height: 90,
        backgroundColor: '#353535',
        paddingTop: 25,
        paddingHorizontal: 15,
        width: width,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: '#b98a56',
        borderWidth: 5,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        marginVertical: 15,
        width: width / 1.1,
        borderRadius:10,
        alignItems:'center'
    },
    name:{
        marginTop:3
    },
    loginView:{
        marginTop:159
    },
    loginText:{
        color:'#fcfcfc',
        fontSize:32,
        position : 'absolute' ,
        left : 70
    },
    loginText1:{
        color:'#fcfcfc',
        fontSize:32,
        position : 'absolute' ,
        left : 60
    },
    inputSection:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:35,
    maxWidth:230,
    },
    input:{
        height: 40,
        width : '100%',
        borderWidth: 1,
        borderColor: 'white'
    },
    loginIcon:{
        width:25,
        height:25
    },
    loginBtn:{
        backgroundColor:'#353535',
        height:45,
        width:135,
        borderRadius:24,
        alignItems:'center',
        justifyContent:'center'
    },
    txtBtn:{
        color:'white'
    },
    textSignUp:{
        color:'#93a6b1'
    },
    backBar:{
        backgroundColor:'#252525',
        padding:20 , 
        marginLeft : 300 ,
        marginBottom: 18 ,
        marginTop: 18 ,
        borderRadius: 7
    },
    loadingContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        height:height,
        backgroundColor:'transparent',
    },
    buyBtn:{
        backgroundColor:'black',
        borderRadius:12,
        padding:1,
        justifyContent: 'center',
        height:55,
        width : '86%',
        alignItems: 'center',
    },
    buySection:{
        marginTop:- height / 8
    },
    buyHeader:{
        justifyContent: "space-between",
        flexDirection: "row",
        width:width,
        
    },
    buyInput:{
        borderColor:'#b98a56',
        borderWidth:1,
        width:width / 1.3,
        borderRadius:12,
        textAlign: 'center'
    },
    cryptoValue:{
        color:'white'
    },
    serctionAccountIcon:{
        backgroundColor:'transparent',
        marginTop : 4 ,
        padding:5,
        paddingTop:Constanse.statusBarHeight,
        flexDirection: "row",
        justifyContent: 'flex-end'
    },
    accountBtn:{
        backgroundColor: 'black',
        borderRadius: 12,
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
        height: 55, 
        width: 55,
    }
})