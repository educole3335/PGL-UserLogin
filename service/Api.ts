const BASE_URL = "http://10.0.2.2:5000";
async function createToken(name: string, email: string, password: string) {
  const request = {
    fullname: name,
    email: email,
    password: password,
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
    return { data };
  } catch (error) {
    console.error("ERROR EN REQUEST:", error);
    throw error;
  }
}

export const serviceApi =  {
  createToken,
};