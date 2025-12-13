import React, { useState, useEffect } from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import { serviceApi as api } from "../../service/Api";
import AuthService from "../../service/auth";

export default function Welcome() {
  const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getWelcomeMessage = async () => {
      try {
        const token = await AuthService.getToken();

        if (!token) {
          setError("No hay token de sesión");
          return;
        }

        const res = await api.welcome(token);
        setWelcomeMessage(res.data?.message || JSON.stringify(res.data));
      } catch (err) {
        console.error(err);
        setError(
          err instanceof Error
            ? err.message
            : "Error al obtener mensaje"
        );
      }
    };

    getWelcomeMessage();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>

      <Text style={{ marginBottom: 16 }}>
        {welcomeMessage
          ? welcomeMessage
          : "No se ha podido obtener el mensaje"}
      </Text>

      {error && <Text style={{ color: "red" }}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: { fontSize: 28, marginBottom: 8 },
});
