import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { serviceApi as api } from "../../service/Api";
import AuthService from "../../service/auth";

const validateEmail = (email = "") => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    if (!validateEmail(email)) {
      Alert.alert("Error", "Introduce un email válido.");
      return;
    }
    if (!password) {
      Alert.alert("Error", "Introduce la contraseña.");
      return;
    }

    setLoading(true);
    try {

      const res = await api.login(email, password);

      if ((res.status === 200 || res.status === 201) && res.data?.token) {
        await AuthService.saveToken(res.data.token);
        navigation.reset({
          index: 0,
          routes: [{ name: "AppDrawer" }],
        });
      } else {
        Alert.alert("Error", res.data?.message || "Credenciales incorrectas.");
      }
    } catch (err) {
      console.error(err);
      Alert.alert(
        "Error",
        err instanceof Error ? err.message : "Error al iniciar sesión"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
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
      <Button title={loading ? "Entrando..." : "Entrar"} onPress={onLogin} disabled={loading} />
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text>¿No tienes cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: "blue" }}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  title: { fontSize: 24, marginBottom: 16, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 8, marginBottom: 12, borderRadius: 6 },
});
