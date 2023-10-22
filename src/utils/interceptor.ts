import axios from "axios";
class ApiInterceptor {
    
    async getToken() {
    const token = localStorage.getItem('token');
    if (token) {
    return token;
    } else {
    return null;
    }
    }
    
    async post(uri, body, useToken) {
    const url = `https://sm.oortfy.com/v1${uri}`;
    let token;
    
    if (useToken) {
    token = await this.getToken();
    }
    
    let headers;
    if (useToken && token) {
    headers = {
    Authorization: token,
    'Content-Type': 'application/json',
    };
    } else {
    headers = {
    'Content-Type': 'application/json',
    };
    }
    
    try {
    const response = await axios.post(url, body, { headers });
    return response.data;
    } catch (error) {
    throw error;
    }
    }
    
    async get(uri, body, useToken) {
    const url = `https://sm.oortfy.com/v1${uri}`;
    let token;
    
    if (useToken) {
    token = await this.getToken();
    }
    
    let headers;
    if (useToken) {
    headers = {
    Authorization: token,
    'Content-Type': 'application/json',
    };
    } else {
    headers = {
    'Content-Type': 'application/json',
    };
    }
    
    try {
    const response = await axios.get(url, {
    headers,
    data: body, // Use 'data' option for sending data in a GET request with Axios
    });
    return response.data;
    } catch (error) {
    throw error;
    }
    }
    
    async delete(uri, useToken) {
    const url = `https://sm.oortfy.com/v1${uri}`;
    let token;
    
    if (useToken) {
    token = await this.getToken();
    }
    
    let headers;
    if (useToken && token) {
    headers = {
    Authorization: token,
    'Content-Type': 'application/json',
    };
    } else {
    headers = {
    'Content-Type': 'application/json',
    };
    }
    
    try {
    const response = await axios.delete(url, { headers });
    return response.data;
    } catch (error) {
    throw error;
    }
    }
    
    async put(uri, body, useToken) {
    const url = `https://sm.oortfy.com/v1${uri}`;
    let token;
    
    if (useToken) {
    token = await this.getToken();
    }
    
    let headers;
    if (useToken && token) {
    headers = {
    Authorization: token,
    'Content-Type': 'application/json',
    };
    } else {
    headers = {
    'Content-Type': 'application/json',
    };
    }
    
    try {
    const response = await axios.put(url, body, { headers });
    return response.data;
    } catch (error) {
    throw error;
    }
    }
    
    async getToken() {
    return await this.getToken();
    }
    }
    
    export default ApiInterceptor;