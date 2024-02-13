import axios from "axios";

export const axiosGetMethod = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.data;
    return data;
};

export const axiosPostMethod = async (myData) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', myData);
    const data = await response.data;
    return data;
};

export const axiosPutMethod = async (id,myData) => {
    const response = await axios.put('https://jsonplaceholder.typicode.com/posts/'+ id, myData);
    const data = await response.data;
    return data;
};

export const axiosPatchMethod = async (id,myData) => {
    const response = await axios.patch('https://jsonplaceholder.typicode.com/posts/'+ id, myData);
    const data = await response.data;
    return data;
};

export const axiosDeleteMethod = async (id) => {
    const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/'+ id);
    const data = await response.data;
    return data;
};
