import { NavigateFunction } from "react-router-dom";
import axiosInstance from "../Interceptor/interceptor";

export const fetchTenantList = async () => {
  try {
    const response = await axiosInstance.get("/tenant/list");
    console.log("GET Request Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("GET Request Error:", error);
  }
};

export const login = async (selectedTenantId: number, email: string, password: string, navigate: NavigateFunction) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
  let isEmail = false;

  if (email.match(emailRegex)) {
    isEmail = true;
  }

  const loginData = {
    email: isEmail ? email : "",
    username: isEmail ? "" : email,
    tenantId: selectedTenantId,
    password,
  };

  try {
    const response = await axiosInstance.post("/auth/login", loginData);

    if (response.status === 200) {
      console.log("Login successful", response);

      // Store the token and user_role in session storage
      const storedToken = response.data.token;
      const storedUserRole = response.data.user_role;
      sessionStorage.setItem('token', storedToken);
      sessionStorage.setItem('user_role', storedUserRole);

      // Retrieve and print the stored data from session storage
      const retrievedToken = sessionStorage.getItem('token');
      const retrievedUserRole = sessionStorage.getItem('user_role');
      console.log('Stored Token:', storedToken);
      console.log('Stored User Role:', storedUserRole);
      console.log('Retrieved Token:', retrievedToken);
      console.log('Retrieved User Role:', retrievedUserRole);

      navigate("/"); // Redirect to another page after successful login
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error("Login error:", error);
  }
};
