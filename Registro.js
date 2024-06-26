// screens/Registro.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Registro({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [gmail, setGmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmacion, setConfirmacion] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contrasenaVisible, setContrasenaVisible] = useState(false);
  const [confirmacionVisible, setConfirmacionVisible] = useState(false);

  const handleRegistro = () => {
    if (nombre && apellido && gmail && contrasena && confirmacion && usuario) {
      if (contrasena === confirmacion) {
        // Lógica de registro
        alert(`Registrado: ${nombre} ${apellido}\nUsuario: ${usuario}\nGmail: ${gmail}`);
        navigation.navigate('Login');
      } else {
        alert('Las contraseñas no coinciden.');
      }
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <Text style={styles.label}>Apellido</Text>
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          value={apellido}
          onChangeText={setApellido}
        />
        <Text style={styles.label}>Gmail</Text>
        <TextInput
          style={styles.input}
          placeholder="Gmail"
          value={gmail}
          onChangeText={setGmail}
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
        <Text style={styles.label}>Confirmar Contraseña</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Confirmar Contraseña"
            value={confirmacion}
            onChangeText={setConfirmacion}
            secureTextEntry={!confirmacionVisible}
          />
          <TouchableOpacity onPress={() => setConfirmacionVisible(!confirmacionVisible)}>
            <Icon name={confirmacionVisible ? 'eye' : 'eye-slash'} size={20} color="grey" />
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Nombre de Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de Usuario"
          value={usuario}
          onChangeText={setUsuario}
        />
        <TouchableOpacity style={[styles.button, { backgroundColor: '#24223b' }]} onPress={handleRegistro}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#5b5a89' }]} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>¿Ya tienes cuenta? Inicia sesión</Text>
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
