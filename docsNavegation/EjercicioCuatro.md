# Ejercicio 4 — Portfolio (Welome, Tabs y Cabecera)

Resumen de lo implementado:

- Se añadió una pantalla de bienvenida en `app/(drawer)/welcome.tsx` con un mensaje, imagen y botón que navega al portfolio.
- Se creó un componente `components/PortfolioHeader.tsx` que muestra el título del portfolio y la información personal (usa `components/Description.tsx`).
- Se adaptó `app/(drawer)/(tabs)/_layout.tsx` para que la cabecera siempre sea visible encima de las pestañas (`user-info` y `codeQr`).

Archivos relevantes:

- `app/(drawer)/welcome.tsx` — pantalla de bienvenida (ruta por defecto del Drawer).
- `components/PortfolioHeader.tsx` — cabecera del portfolio.
- `app/(drawer)/(tabs)/_layout.tsx` — layout de tabs que incluye la cabecera.

Cómo probar:

1. Instala dependencias (ver `docs/EjercicioCinco.md` y `docs/EjercicioUno.md`).
2. Ejecuta el proyecto con `npm run start` desde la raíz `PGL-Navigation`.
3. En el Drawer la pantalla inicial será `Bienvenida`; pulsa el botón para ir al portfolio (tabs).

Notas:

- La ruta usada para navegar al portfolio desde la bienvenida es `/(tabs)` (expo-router). Si prefieres otra ruta, edita `goToPortfolio()` en `welcome.tsx`.

---
