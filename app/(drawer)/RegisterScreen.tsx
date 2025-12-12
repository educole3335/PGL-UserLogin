// src/screens/RegisterScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { serviceApi } from "../../service/Api";

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (pw: string) => {
  // Simple: al menos 6 caracteres con letra y número
  return /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(pw);
};

export default function RegisterScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onRegister = async () => {
    if (!fullName.trim()) {
      Alert.alert("Error", "Introduce tu nombre completo.");
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert("Error", "Introduce un email válido.");
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert(
        "Error",
        "La contraseña debe tener al menos 6 caracteres y contener letras y números."
      );
      return;
    }

    setLoading(true);
    try {
      const res = await serviceApi.createToken(fullName, email, password);

      // Manejo genérico de respuesta
      if (res.status === 201 || res.status === 200) {
        Alert.alert("Registro correcto", "Usuario registrado correctamente.");
        router.navigate("Login");
      } else {
        Alert.alert(
          "Registro",
          res.data?.message || "Respuesta del servidor inesperada."
        );
      }
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "No se pudo registrar el usuario.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title={loading ? "Registrando..." : "Registrarse"}
        onPress={onRegister}
        disabled={loading}
      />
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text>¿Ya tienes cuenta? </Text>
        <TouchableOpacity onPress={() => router.navigate("Login")}>
          <Text style={{ color: "blue" }}>Inicia sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  title: { fontSize: 24, marginBottom: 16, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 12,
    borderRadius: 6,
  },
});
