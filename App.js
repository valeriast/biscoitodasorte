import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App(){
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textofrase, setTextofrase] = useState('');

  let frases = ['Frase 1', 'Frase23232', 'Frase32132' ];

  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextofrase('" ' + frases[numeroAleatorio]+ ' "');
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciar(){
    setImg(require('./src/biscoito.png'))
    setTextofrase('');
  }

  return(
    <View style={styles.container}>
      <Image 
        source={img}
        style={styles.img}/>

      <Text style={styles.textofrase}>{textofrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: '#121212'  }]} onPress={reiniciar}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color: '#121212'}]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    width: 230,
    height: 230
  },
  textofrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;