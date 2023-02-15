import { StatusBar } from 'expo-status-bar';
import {React, useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Modal  } from 'react-native';

import logo from './image/logo.png'
import Resultado from './src/modal';

export default function App() {

  const [alcool, setAlcool] = useState('')
  const [gasolina, setGasolina] = useState('')

  const [modal, setModal] = useState(false)
  const [resultado, setResultado] = useState('')

  //desativar teclado
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  }

  const calcular = ()=>{
    dismissKeyboard()
    if(alcool === '' || gasolina === ''){
      alert('preencha os campos')
      return
    }
    
    const calculo = alcool / gasolina

    if(calculo < 0.7){
      setResultado('Álcool')
    }else{
      setResultado('Gasolina')
    }
    
    setModal(true)
  }
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image source={logo}/>
        <Text style={styles.title}>Qual melhor opção?</Text>

        <View style={{width: '100%'}}>
          <Text style={styles.titleInput}>Álcool (preço por litro):</Text>
          <TextInput 
            style = {styles.input}
            value={alcool}
            keyboardType="numeric"
            placeholder="Digite um valor"
            onChangeText = {(text) => {
              // Remove caracteres não-numéricos exceto o ponto
              const filteredText = text.replace(/[^0-9.]/g, '');
              // Separa a parte inteira e a parte decimal pelo ponto
              const parts = filteredText.split('.');
              // Limita a parte decimal a duas casas decimais
              if (parts.length > 1) {
                const decimalPart = parts[1].slice(0, 2);
                setAlcool(`${parts[0]}.${decimalPart}`);
              } else {
                setAlcool(parts[0]);
              }
          }}
          />
          <Text style={styles.titleInput}>Gasolina (preço por litro):</Text>
          <TextInput 
            style = {styles.input}
            keyboardType="numeric"
            placeholder="Digite um valor"
            value={gasolina}
            onChangeText = {(text) => {
                // Remove caracteres não-numéricos exceto o ponto
                const filteredText = text.replace(/[^0-9.]/g, '');
                // Separa a parte inteira e a parte decimal pelo ponto
                const parts = filteredText.split('.');
                // Limita a parte decimal a duas casas decimais
                if (parts.length > 1) {
                  const decimalPart = parts[1].slice(0, 2);
                  setGasolina(`${parts[0]}.${decimalPart}`);
                } else {
                  setGasolina(parts[0]);
                }
            }}
            maxLength={8}
          />

          <TouchableOpacity style={styles.button} onPress={calcular}>
            <Text style={styles.textButton}>Calcular</Text>
          </TouchableOpacity>

        </View>

        <Modal animationType='slide' visible={modal}>
          <Resultado setModal={setModal} resultado={resultado} alcool={alcool} gasolina={gasolina} setAlcool={setAlcool} setGasolina={setGasolina}/>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 23,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 40,
    marginBottom: 30,
  },
  titleInput:{
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 2,
  },
  input: {
    width: '100%', 
    padding: 10, 
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    fontWeight: 'bold',
 },
 button:{
  backgroundColor: '#FF0000',
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 10,
  marginTop: 20,
  alignItems: 'center',
  justifyContent: 'center',
  height: 50,
 },
 textButton:{
  color: 'white', 
  fontWeight: 'bold',
  fontSize: 25,
 },


});
