const BASE_URL = "http://10.0.2.2:5000";

// =======================
// REGISTRO
// =======================
async function register(fullname: string, email: string, password: string) {
  const request = {
    fullname,
    email,
    password,
  };

  try {
    const response = await fetch(BASE_URL + "/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error("ERROR REGISTER:", error);
    throw error;
  }
}

// =======================
// LOGIN
// =======================
async function login(email: string, password: string) {
  const request = {
    email,
    password,
  };

  try {
    const response = await fetch(BASE_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error("ERROR LOGIN:", error);
    throw error;
  }
}

/* =======================
 * BIENVENIDA (TOKEN)
 =======================*/
async function welcome(token: string) {
  try {
    const response = await fetch(BASE_URL + "/auth/welcome", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error("ERROR WELCOME:", error);
    throw error;
  }
}

export const serviceApi = {
  register,
  login,
  welcome,
};
