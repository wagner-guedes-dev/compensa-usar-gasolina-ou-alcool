import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image  } from 'react-native';
import gas from '../../image/gas.png'

export default function Resultado(props) {
   
 return (

        <View style={styles.container}>
            <Image
                source={gas}
            />
            <Text style={styles.title}>Compensa usar {props.resultado}</Text>
            <Text style={styles.titlePrecos}>Com os preços:</Text>
                <Text style={styles.text}>Álcool: R$ {props.alcool} (preço por litro)</Text>
                <Text style={styles.text}>Gasolina: R$ {props.gasolina} (preço por litro)</Text>

            <TouchableOpacity style={styles.button} onPress={()=> {
                props.setModal(false)
                props.setAlcool('')
                props.setGasolina('')
                }}>
                <Text style={styles.textButton}>Calcular novamente</Text>
            </TouchableOpacity>
        </View>

  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#333',
        width: '100%',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#32CD32',
        marginTop: 40,
        marginBottom: 30,
      },
    titlePrecos:{
        color: 'white',
        fontSize:23,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    text:{
        color: 'white',
        fontWeight: '400',
        fontSize: 18,
        margin: 3,
    },
    button:{
        borderWidth: 2,
        borderColor: '#FF0000',
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '80%',
    },
    textButton:{
        color:'#FF0000',
        fontSize: 18,
        fontWeight: '700',
    }
})