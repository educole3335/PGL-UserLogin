// src/services/auth.js
import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "USER_TOKEN";

const AuthService = {
  saveToken: async (token : string) => {
    try {
      await AsyncStorage.setItem(TOKEN_KEY, token);
      return true;
    } catch (e) {
      console.error("Error saving token", e);
      return false;
    }
  },
  getToken: async () => {
    try {
      const token = await AsyncStorage.getItem(TOKEN_KEY);
      return token;
    } catch (e) {
      console.error("Error reading token", e);
      return null;
    }
  },
  removeToken: async () => {
    try {
      await AsyncStorage.removeItem(TOKEN_KEY);
      return true;
    } catch (e) {
      console.error("Error removing token", e);
      return false;
    }
  },
};

export default AuthService;
