import api from "./api";

export const register = async (username, email, password) => {
  try {
    const response = await api.post("/signup", { username, email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

export const login = async (email, password) => {
  try {
    const response = await api.post(
      "/login",
      { email, password },
      { withCredentials: true }
      );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};
