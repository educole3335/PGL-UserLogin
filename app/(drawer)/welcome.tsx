// src/screens/WelcomeScreen.js
import React from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import { serviceApi as api } from "../../service/Api";

export default function welcome() {
  const getWelcomeMessage = async () => {
    try {
      // endpoint protegido: /welcome
      const res = await api.get("/welcome");
      Alert.alert("Mensaje del servidor", res.data?.message || JSON.stringify(res.data));
    } catch (err) {
      console.error(err);
      Alert.alert("Error", err.response?.data?.message || err.message || "Error al obtener mensaje");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={{ marginBottom: 16 }}>Has iniciado sesión correctamente.</Text>
      <Button title="Mostrar mensaje protegido" onPress={getWelcomeMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16 },
  title: { fontSize: 28, marginBottom: 8 },
});
