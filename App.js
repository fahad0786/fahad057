/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button ,Image } from 'react-native';

export default function App() {
  return (
<>
    
    <View style={{ flex: 2.5, backgroundColor: "#f595fe" , borderRadius: 80 , marginLeft:10 ,marginRight:10,marginTop:10}}>
    <Image source={require("./Saly-1intro-image.png")}></Image>
    </View>
    
    <View style={[styles.container,{backgroundColor:"white"}]}>
    <Text style={{fontWeight:"bold",fontSize:35,marginTop:60}}> Discover Your </Text>
    <Text style={{fontWeight:"bold",fontSize:35}}>Own Dream House</Text>
    <View style={[{alignItems:"center",marginLeft:20,marginTop:20}]}>
           <Text>Appication login page which is being devlop on react </Text>
           <Text>native
      lab work lab task Mad tasks</Text>
      </View>
    </View> 
    <View style={[{flexDirection:"row",marginLeft:130 , marginTop: 100  , paddingHorizontal:20,}]}>
    
    <Button title='Sign in'  style={{ backgroundColor:"#f595fe"}}/>
    <Button title='Register' color="black" ></Button>
    
    </View>
    

  
    
    <View style={styles.container}>
    <StatusBar style="auto"/>
    </View>
    </>
    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})*/
   

                               /* Thoery assigment code of screen */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , TextInput ,Button } from 'react-native';

export default function App() {
  return (
     <View style={styles.container}>
       <Image source={require("./unnamed.png")} style={{width:70, height:80 , justifyContent:"center"}}></Image>
       <Text style={{marginBottom:4, fontWeight:"bold", fontSize:35}}>Welcome To Pinterset</Text>
       <Text style={{marginBottom:35 , fontSize:14}}>Find new ideas to try</Text>
       <TextInput style={{ width:"70%",placeholderTextColor:"blue", borderWidth:3 , backgroundColor:"white" , fontcolor:"white" ,textAlign:"center" , borderRadius:30  }} placeholder="Email"  ></TextInput>
       <TextInput style={{ width:"70%",placeholderTextColor:"blue", borderWidth:3 , backgroundColor:"white" , fontcolor:"white" , margin:15 , textAlign:"center" , borderRadius:30 }} placeholder="Password"  ></TextInput>
       <TextInput style={{ width:"70%",placeholderTextColor:"blue", borderWidth:3 , backgroundColor:"white" , fontcolor:"white" , margin:5 , textAlign:"center" , borderRadius:30 }} placeholder="Age"  ></TextInput>
       <Text style={{ marginRight:150 , marginTop:5}}>Forget Password?</Text>
       <View style={{ backgroundColor:"red" , margin:10 , width:"70%", marginTop:10 ,  borderRadius:30}}>
       <Button title='Log in' />
       </View>
       <Text style={{  textAlign :"center", margin:10}}>OR</Text>
       <View style={{ backgroundColor:"red" , margin:10 , width:"70%", marginTop:10 ,  borderRadius:30}}>
       <Button title='Continue with facebook' />
       </View>
       <View style={{ margin:10 , width:"70%", marginTop:10 ,  borderRadius:30}}>
       <Button title='Continue with google' Color="#ff0000"/>
       </View>
      <StatusBar style="auto" />
      <View style={{fontSize:"20"}}>
      <Text>By continuing, you agree to Pinterset's </Text>  
        <Text style={{fontWeight:"bold",textAlign:"center"}}>Terms of Service</Text> 
        <Text>and acknowledge that you've read our</Text> 
        <Text  style={{fontWeight:"bold",textAlign:"center"}}>Privacy Policy.</Text>
        <Text  style={{fontWeight:"bold",textAlign:"center" ,marginTop:10}}>Already a member? Log in </Text>
                            <Text style={{fontWeight:"bold",textAlign:"center" ,marginTop:10}}>Are you a business?
                                Get started here!</Text>
        </View>
    
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


