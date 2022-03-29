import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"bold" , fontSize:35 , marginTop:10}}> Welcome back
    </Text>
      <Text style={{paddingTop:10}}> Welcome to the login page of the website work is done on the front login page of the website</Text>
      <Text style={{paddingBottom:40}}>The work is done on the front side of the page as called as log in page of the website</Text>
      <TextInput style={{ marginTop:20,width:"20%", borderWidth:3 , backgroundColor:"pink" , fontcolor:"white" , alignContent:"center",textAlign:"center", paddingHorizontal:20,placeholderTextColor:"blue",paddingVertical:20 , borderRadius:2}} placeholder="Username,Email & phonenumber" ></TextInput>
      <TextInput style={{paddingTop:30 ,width:"20%",placeholderTextColor:"blue", borderWidth:3 , backgroundColor:"pink" , fontcolor:"white" , margin:20 }} placeholder="Password" ></TextInput>
      <Text style={{marginLeft:300 , textAlign:"justify", alignContent:"center"}}>Forget Password?</Text>
      <TextInput style={{paddingTop:30 ,width:"20%", borderWidth:3 , backgroundColor:"pink" , color:"white" , margin:20 , aligncontent:"center" , broderradius:20}} placeholder="Sign in" ></TextInput>
      <Text style={{margin:20, fontWeight:"bold"}}>Or Sign up With</Text>
      <View style={{width:50,height:50,flex:1, backgroundColor:"white" , flexDirection:"row" ,  marginRight:60}}>
      <Image source={require("./pic/google.png")} style={{marginRight:20,broderradius:20}}></Image> 
      <Image source={require("./pic/Facbook.png")}style={{marginRight:20,broderradius:20}}></Image>
      <Image source={require("./pic/Group.png")}style={{}}></Image>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});