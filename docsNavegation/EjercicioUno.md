# README — Instalación y Configuración de Expo Router con Drawer

Este proyecto utiliza **Expo Router** junto con **React Navigation Drawer** para implementar un menú lateral (Drawer).

---

##  Requisitos

- Node.js instalado  
- Expo CLI (opcional)
- Proyecto creado con:

```bash
npx create-expo-app my-app
```

## 1. Instalación de dependencias

 Instala Expo Router:
 ```bash
 npx expo install expo-router
 ```


 Instala React Navigation y el Drawer:
 ```bash
 npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
 ```

 ## 2. Activar Expo Router

 En App.json o app.config.js agrega:

 ```json
 {
  "expo": {
    "plugins": ["expo-router"]
  }
}
 ```

Esto habilita el sistema de enrutado basado en archivos.

## 3.Estructura de carpetas.

El proyecto debe seguir esta estructura:

```
app/
 ├─ _layout.js
 ├─ (drawer)/
 │    ├─ _layout.js
 │    ├─ index.js
 │    ├─ profile.js
```

## 4. Código necesario.

### app/_layout.tsx

```js
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
}
```

### app/(drawer)/_layout.tsx

```js
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: "#6200ee",
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}
    />
  );
}
```

### app/(drawer)/index.tsx

```js
import { View, Text } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pantalla Home</Text>
    </View>
  );
}
```

### app/(drawer)/profile.tsx

```js
import { View, Text } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pantalla Perfil</Text>
    </View>
  );
}
```

# 5. Ejecutar el proyecto

```bash
npm run start
```