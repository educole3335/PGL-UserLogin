# Autenticación y manejo de token.

## AuthChecker: Componente que verifica la existencia del token al iniciar la app y redirige según el estado de autenticación:
- **Servicio `Auth`**:
  - `setItem(token: string)`: guarda el token JWT en el almacenamiento interno.
  - `getItem()`: obtiene el token almacenado.
  - `removeItem()`: elimina el token al hacer logout.

 Si hay token → muestra el drawer con las pantallas protegidas.

 Si no hay token → redirige a la pantalla de login.

- **Componente `AuthChecker`**:
  - Verifica la existencia del token al iniciar la app y redirige según el estado de autenticación.
- **Pantalla inicial (`index.tsx`)**:
  - Reemplazada para usar `AuthChecker` como punto de entrada, reemplazando el contenido actual por `<AuthChecker />`.
- **Seguridad de navegación**:
  - Solo permite acceder a pantallas como por ejemplo `(drawer)` si el token existe.

---

```js
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
import { authService } from "../service/auth";

const AuthChecker = () => {
  useEffect(() => {
    const checkAuth = async () => {
      const token = await authService.getItem();

      if (!token) {
        router.replace("/LoginScreen");
      } else {
        router.replace("/(drawer)/welcome");
      }
    };

    checkAuth();
  }, []);

  return (
    <View>
      <Text>Not logged.</Text>
    </View>
  );
};

export default AuthChecker;
```

Se coloca como pantalla inicial (app/index.tsx) para que siempre se verifique la sesión al abrir la app.

## Flujo de navegación

* Usuario abre la app → AuthChecker verifica token.

* Token existe → redirige al drawer (/(drawer)/welcome).

* Token no existe → redirige a LoginScreen.

[Volver](../Readme.md)