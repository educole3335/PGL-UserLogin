import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerTitle: "" }}>
      <Drawer.Screen
        name="welcome"
        options={{
          title: "Bienvenida",
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Portfolio App",
        }}
      />
      <Drawer.Screen
        name="mylist"
        options={{
          title: "My List - Football",
        }}
      />
      <Drawer.Screen
        name="loginScreen"
        options={{
          title: "Login",
        }}
      />
      <Drawer.Screen
        name="registerScreen"
        options={{
          title: "Register",
        }}
      />
    </Drawer>
  );
}
