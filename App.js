/*import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
const Counter = () => {
    const [count, setCount] = useState(0);
   return (
        <View>
           <Button
             onPress={() => {setCount(count + 1)}} title="Add one"
           />
           <Text>{count} times</Text>
       </View>
   );
}
export default Counter;*/   

                        /*Todo app */

import React,{useState} from 'react';
import './App.css';



function App() {
  const [todos,setTodos] = useState([]);
  const [text,setText] = useState('');
  


  function handleClick(){
    if(text===''){
      return;
    }
    setTodos([...todos,text]);
    setText('');
  }
  function handleChange(e){
    setText(e.target.value);
  }
  function handleDelete(target){
    let newArr = todos.filter((value,index)=>index!=target);
    setTodos(newArr);
  }
  return (
    <div className="App">
      <input placeholder="Enter your todo" value={text} onChange={handleChange} />
 
      <button onClick={handleClick}>Add todo in list</button>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h1 style={{backgroundColor:"black"}}>Todos:</h1>
        {
          todos.map((value,index)=>{
            return <div style={{display:'flex',justifyContent:'space-between',width:'20%'}} key={index}>
              <h3>{index+1}. {value}</h3>
              <button onClick={()=>handleDelete(index)}>del todo</button>
            </div>            
          })
        }
      </div>
    </div>
  );
}
export default App;