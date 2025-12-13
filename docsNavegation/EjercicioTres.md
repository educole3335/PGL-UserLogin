README — Pantalla bienvenida.

Para realizar este ejercicio únicamente tenemos que añadir una nueva pantalla en la ruta **app/(drawer)/Welcome.tsx**, ya que al añadir un nuevo documento ahí, se crea automáticamente una pestaña en el Drawer. Para que esto funcione, necesita que tenga un export default function el componente.

```js
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { router } from "expo-router";

export default function WelcomeScreen() {
  const handleNavigateToPortfolio = () => {
    router.replace("/(drawer)/(tabs)/user-info");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido Amigooooooo!</Text>

      <Image
        source={require("../../assets/SofyanAmrabat.jpg")}
        style={styles.welcomeImage}
      />

      <Text style={styles.message}>
        Este es Adrian, el + sesi.
      </Text>

      <Button title="Ver mi Portfolio" onPress={NavigateToPortfolio} />
    </View>
  );
}
```

Es una pantalla básica, nos dara la bienvenida, una imagen y una descripción chachi chachi. He creado una función **NavigateToPortfolio**:

```js
const NavigateToPortfolio = () => {
  router.replace("/(drawer)/(tabs)/user-info");
};

///

<Button title="Ver mi Portfolio" onPress={NavigateToPortfolio} />;
```

Cuando hago click en el botón, llamo a la función **NavigateToPortfolio** que con router.replace(), reemplaza la pantalla actual en la pila de navegación por una nueva pantalla, en lugar de simplemente agregar la nueva pantalla encima y me redirige a **app/(drawer)/(tabs)/user-info**