import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Description = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        style={styles.avatar}
        source={require("../assets/SofyanAmrabat.jpg")}
      />
      <View style={styles.infoLabel}>
        <Text style={styles.textInfo}>Descripción sobre mí!</Text>
        <Text>
          Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
          prácticas para mis queridos alumnos
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: { width: 80, height: 80, borderRadius: 8, marginRight: 12 },
  infoLabel: { flex: 1 },
  textInfo: { fontWeight: "700", marginBottom: 4 },
});

export default Description;
