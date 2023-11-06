import axiosInstance from "../Interceptor/interceptor";

export const fetchUserList = async () => {
  try {
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.error("Token is missing");
      return;
    }

    const response = await axiosInstance.get("/auth/user/users-list", {
      headers: {
        Authorization: `${token}`,
      },
    });

    console.log("GET Request Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("GET Request Error:", error);
  }
};
