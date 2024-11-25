import React, { useState, useEffect } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
/***/
function App(): React.JSX.Element {
  const [number, setNumber] = useState(0); // State to store the number
  const [number1, setNumber1] = useState("0");
  const [number2, setNumber2] = useState("0");
  const [operator,setOperator] = useState("");
  const [numbSeq ,setNumbSeq]  = useState("Frist");
  const [equation,setEquation] = useState("");
  const [equalPressed, setEqPrs] = useState(false);
  const [isDisabled, setisDisabled] = useState(false);
  /*const decreaseNumber = () => {
    setNumber((prev) => prev - 1); // Decrease the number by 1
  };

  const increaseNumber = () => {
    setNumber((prev) => prev + 1); // Increase the number by 1
  };*/

  const handleInputChange = (text: string) => {
    // Validate and update number state if input is a valid number
    const numericValue = parseInt(text, 10);
    if (!isNaN(numericValue)) {
      setNumber1(text);
    } else if (text === '') {
      setNumber1("0"); // Reset to 0 if input is empty
    }
  };
  const setOp = (text : string) => {
    setOperator (text);
    setEquation((prev)=> prev+text)
    setNumbSeq("Second");
    
  }
  
  const clearNumbers = () => {
    Cleareq();
    setEP(false);
    setNumber(0);
    setNumber1("0");
    setNumber2("0");
    setOperator("");
    setNumbSeq("First");
    setisDisabled(true);
    
  }
  const setEP = (BPress : boolean) => {
    setEqPrs(BPress);
  }
  const seteq = (text : string) => {
    setEquation((prev)=> prev+text)
    //setEquation(equation + text) ;
  }
  const Cleareq =  () => {
     setEquation('') ;
  }
  const setNb1 = (text:string)=>{
    setNumber1((prev)=> prev+text)
    //setNumber1(number1 + text);
    seteq(text);
  }

  const setinitNb = (text:string)=>{
    setNumber(parseInt(number1 + text,10));
  }
  const setnb = (text: string)=> {
    if(equalPressed && operator == ""){ 
      setisDisabled(false);
      clearNumbers(); 
      setNb1(text);
      setinitNb(text);
    }
    if (!equalPressed && operator == "") {
      setisDisabled(false);
      setNb1(text);
      setinitNb(text);
    }
    if ( operator !== "") {
      setEquation((prev)=> prev+text)
      setisDisabled(true);
      setNumber2((prev)=> prev+text);
      setNumber2(number2 + text);
      setNumber(parseInt(number2 + text,10));
    }
  
  }
  const equal = () => {
    const numeric1Value = parseInt(number1, 10);
    const numeric2Value = parseInt(number2, 10);
    if (operator == "+") { setNumber(numeric1Value + numeric2Value) }
    if (operator == "-") { setNumber(numeric1Value - numeric2Value) }
    if (operator == "*") { setNumber(numeric1Value * numeric2Value) }
    if (operator == "/") { setNumber(numeric1Value / numeric2Value) }  
    setNumber1("0");
    setNumber2("0");
    setOperator("");
    setNumbSeq("First");
    setEqPrs(true);
    setisDisabled(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.border}>
      <Text style={styles.HeaderText}>Enter {numbSeq} Number</Text>
      <Text style={styles.HeaderText}>  {equation }  </Text>
      <View style={styles.row}>
      
        <TextInput
          style={styles.input}
          value={String(number)} // Display the current number
          onChangeText={handleInputChange} // Update the state on text input
          keyboardType="numeric" // Show numeric keyboard
          textAlign="center"
          editable={false}
        />
       
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button}  onPress={() => setnb("1")}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setnb("2")}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setnb("3")}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.opButton} 
            onPress={()=>setOp("/")}
            disabled={isDisabled}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => setnb("4")}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.button} onPress={() => setnb("5")}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setnb("6")}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.opButton} onPress={()=>setOp("*")} disabled={isDisabled}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => setnb("7")}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setnb("8")}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => setnb("9")}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opButton} onPress={()=>setOp("+")} disabled={isDisabled}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity style={styles.Acbutton} onPress={clearNumbers}>
          <Text style={styles.buttonText}>AC</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setnb("0")}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.opButton} onPress={equal}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opButton} onPress={()=>setOp("-")} disabled={isDisabled}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    
  },
  HeaderText:{
    color: 'black',
    fontSize: 20,
    
  },
  border:{
    borderColor :'black',
    borderWidth : 2,
    padding: 30,
    width:300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAd8Af',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:5
  },
  button: {
    width: 50,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 0,
    margin: 10,
    marginHorizontal: 0,
    borderColor: '#ffffff'
  },
  Acbutton:{
    width: 50,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 0,
    margin: 10,
    marginHorizontal: 0,
    borderColor: '#ffffff',

  },
  opButton:{
    width: 50,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 0,
    margin: 10,
    marginHorizontal: 0,
    borderColor: '#ffffff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,   
    textAlign : 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: 200,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default App;
