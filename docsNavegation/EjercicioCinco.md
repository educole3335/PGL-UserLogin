# Ejercicio 5 — Integración MyList (Football Player)

Resumen de lo implementado:

- Se recicló la lista de la práctica `PGL-MyList-FootballPlayer` y se añadió como pantalla en esta aplicación.
- Archivo creado: `app/(drawer)/mylist.tsx`.
- La pantalla muestra:
  - Contadores (total jugadores, seleccionados, valor total).
  - Lista de jugadores con nombre, equipo y precio.
  - Botón para marcar/desmarcar cada jugador (actualiza los contadores automáticamente).

Archivos relevantes:

- `app/(drawer)/mylist.tsx` — pantalla MyList reciclada.
- `PGL-MyList-FootballPlayer/` — proyecto fuente del que se recicló la lista (seed data usada).

Cómo probar:

1. Desde la raíz del proyecto `PGL-Navigation`, instala dependencias (ver `docs/EjercicioUno.md` y notas abajo).
2. Ejecuta `npm run start`.
3. Abre el Drawer y selecciona "My List - Football".

Dependencias necesarias para que todo funcione correctamente:

- `expo-router`
- `@expo/vector-icons`
- `react-native-qrcode-svg` (para la pantalla QR)
- `@react-navigation/drawer`
- `react-native-gesture-handler`
- `react-native-reanimated`
- `react-native-screens`
- `react-native-safe-area-context`

Instalación recomendada (ejecutar en `cmd.exe` desde la raíz del proyecto `PGL-Navigation`):

```cmd
cd /d "c:\Users\usuario\Desktop\PGL\navegacion1\PGL-Navigation"

:: Expo Router (si falta)
npx expo install expo-router

:: Iconos y QR
npx expo install @expo/vector-icons
npm install react-native-qrcode-svg

:: React Navigation Drawer + peers
npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
```

Nota sobre `react-native-reanimated`: puede requerir pasos adicionales (reinicio o rebuild) dependiendo si tu proyecto es managed o bare. Sigue la guía oficial si aparece algún error.

---
