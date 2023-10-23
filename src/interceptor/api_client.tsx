// import axios, { AxiosResponse, AxiosError } from 'axios';

// class ApiInterceptor {
//   private async getToken(): Promise<string | null> {
//     const token = localStorage.getItem('token');
//     if (token) {
//       return token;
//     } else {
//       return null;
//     }
//   }

//   public async post(uri: string, body: any, useToken: boolean): Promise<any> {
//     const url = `https://sm.oortfy.com/v1${uri}`;
//     let token: string | null = null; 
  
//     if (useToken) {
//       token = await this.getToken();
//     }
  
//     let headers: { [key: string]: string } = {};
//     if (useToken && token) {
//       headers = {
//         Authorization: token,
//         'Content-Type': 'application/json',
//       };
//     } else {
//       headers = {
//         'Content-Type': 'application/json',
//       };
//     }
  
//     try {
//       const response: AxiosResponse = await axios.post(url, body, { headers });
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }
  

//   public async get(uri: string, body: any, useToken: boolean): Promise<any> {
//     const url = `https://sm.oortfy.com/v1${uri}`;
//     let token: string | null = null; 
  
//     if (useToken) {
//       token = await this.getToken();
//     }
  
//     let headers: { [key: string]: string } = {};
//     if (useToken && token) {
//       headers = {
//         Authorization: token,
//         'Content-Type': 'application/json',
//       };
//     } else {
//       headers = {
//         'Content-Type': 'application/json',
//       };
//     }
  
//     try {
//       const response: AxiosResponse = await axios.get(url, {
//         headers,
//         data: body, // Use 'data' option for sending data in a GET request with Axios
//       });
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }
  
//   public async delete(uri: string, useToken: boolean): Promise<any> {
//     const url = `https://sm.oortfy.com/v1${uri}`;
//     let token: string | null = null; // Provide a default value
  
//     if (useToken) {
//       token = await this.getToken();
//     }
  
//     let headers: { [key: string]: string } = {};
//     if (useToken && token) {
//       headers = {
//         Authorization: token,
//         'Content-Type': 'application/json',
//       };
//     } else {
//       headers = {
//         'Content-Type': 'application/json',
//       };
//     }
  
//     try {
//       const response: AxiosResponse = await axios.delete(url, { headers });
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }
  
//   public async put(uri: string, body: any, useToken: boolean): Promise<any> {
//     const url = `https://sm.oortfy.com/v1${uri}`;
//     let token: string | null = null; // Provide a default value
  
//     if (useToken) {
//       token = await this.getToken();
//     }
  
//     let headers: { [key: string]: string } = {};
//     if (useToken && token) {
//       headers = {
//         Authorization: token,
//         'Content-Type': 'application/json',
//       };
//     } else {
//       headers = {
//         'Content-Type': 'application/json',
//       };
//     }
  
//     try {
//       const response: AxiosResponse = await axios.put(url, body, { headers });
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }
  
// }

// export default ApiInterceptor;




// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// // Create an Axios instance with a base URL
// const api: AxiosInstance = axios.create({
//   baseURL: 'https://api.example.com', 
// });

// // Request interceptor
// api.interceptors.request.use(
//     (config) => {
//       // Type assertion to let TypeScript know the type of config
//       const requestConfig = config as AxiosRequestConfig;
  
//       // You can add headers, authentication tokens, or modify the request config here
//       return requestConfig;
//     },
//     (error: AxiosError) => {
//       return Promise.reject(error);
//     }
//   );
  
  

// // Response interceptor
// api.interceptors.response.use(
//   (response: AxiosResponse) => {
//     // You can modify the response data here, or handle common success scenarios
//     return response;
//   },
//   (error: AxiosError) => {
//     // You can handle errors globally here, for example, show a notification for 404 or 500 errors
//     return Promise.reject(error);
//   }
// );

// export default api;
