import { StatusBar } from 'expo-status-bar';
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
})


