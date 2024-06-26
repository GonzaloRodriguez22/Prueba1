// screens/Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [contrasenaVisible, setContrasenaVisible] = useState(false);
  const [recordarUsuario, setRecordarUsuario] = useState(false);

  const handleLogin = () => {
    if (usuario && contrasena) {
      // Lógica de inicio de sesión
      alert(`Iniciando sesión como: ${usuario}`);
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.label}>Nombre de Usuario o Gmail</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de Usuario o Gmail"
          value={usuario}
          onChangeText={setUsuario}
        />
        <Text style={styles.label}>Contraseña</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Contraseña"
            value={contrasena}
            onChangeText={setContrasena}
            secureTextEntry={!contrasenaVisible}
          />
          <TouchableOpacity onPress={() => setContrasenaVisible(!contrasenaVisible)}>
            <Icon name={contrasenaVisible ? 'eye' : 'eye-slash'} size={20} color="grey" />
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setRecordarUsuario(!recordarUsuario)}
          >
            {recordarUsuario ? (
              <Icon name="check-square" size={20} color="grey" />
            ) : (
              <Icon name="square-o" size={20} color="grey" />
            )}
            <Text style={styles.checkboxLabel}>Recordarme</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#24223b' }]} onPress={handleLogin}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#5b5a89' }]} onPress={() => navigation.navigate('Registro')}>
          <Text style={styles.buttonText}>¿No tienes cuenta? Regístrate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9b9ce6',
  },
  box: {
    width: '70%', // Ajustar ancho de la caja
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5, // Para sombra en Android
    shadowColor: '#000', // Para sombra en iOS
    shadowOffset: { width: 0, height: 2 }, // Para sombra en iOS
    shadowOpacity: 0.25, // Para sombra en iOS
    shadowRadius: 3.84, // Para sombra en iOS
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'left',
  },
  input: {
    height: 35, // Modifica el tamaño al largo de las casillas
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  inputPassword: {
    flex: 1,
    height: 35, // Modifica el tamaño al largo de las casillas
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    color: 'black',
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
