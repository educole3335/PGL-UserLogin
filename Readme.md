UD2 – Práctica 3 – Inicio de sesión de usuario
===============================

PGL-UserLogin es una aplicación móvil desarrollada en React Native con Expo Router que permite a los usuarios:

* Regístrese con nombre completo, correo electrónico y contraseña.
* Iniciar sesión y mantener su sesión mediante un token JWT.
* Acceda a una pantalla de bienvenida protegida.
* Cerrar sesión y eliminar su token de sesión.
* Interactuar con una API que valida usuarios y tokens.

El objetivo del proyecto es practicar la autenticación de usuarios, el manejo de AsyncStorage y la comunicación con APIs REST desde React Native.

Estructura principal del proyecto
-----------------------------------

* **app**
	+ **components**
		- **AuthForm.tsx**: Componente que contiene el formulario de registro e inicio de sesión.
		- **WelcomeScreen.tsx**: Pantalla de bienvenida protegida por token.
	+ **screens**
		- **LoginScreen.tsx**: Pantalla de inicio de sesión.
		- **RegisterScreen.tsx**: Pantalla de registro.
	+ **service**
		- **api.ts**: Contiene las funcionesones para interactuar con la API.
		- **auth.ts**: Contiene las funcionesones para interactuar con la autenticación de usuarios.
	+ **utils**
		- **constants.ts**: Contiene las constantes del proyecto.
		- **types.ts**: Contiene los tipos del proyecto.

Instalación
-----------

Clonar el repositorio desde GitHub:

git clone https://github.com/tu-usuario/PGL-UserLogin.git

Entrar en el directorio del proyecto:

cd PGL-UserLogin

Instalar las dependencias del proyecto:

npm install

Ejecución
-----------

Inicia el proyecto con Expo o web:

npm run start
## Pantalla de Iniciar Sesion
[Pantalla de Iniciar Sesion](../PGL-UserLogin/docsUserLogin/PantalladeIniciarSesion.md)
## Pantalla de Registro
[Pantalla de Registro](../PGL-UserLogin/docsUserLogin/PantalladeRegistro.md)
## Ejercicio3
[Ejercicio3](../PGL-UserLogin/docsUserLogin/Ejercicio3.md)
## Welcome
[Welcome](../PGL-UserLogin/docsUserLogin/Welcome.md)