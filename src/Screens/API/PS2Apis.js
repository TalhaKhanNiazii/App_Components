export const fetchGetMethod = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'GET',
    });
    const data = await response.json();
    return data;
}

export const fetchPostMethod = async (myData) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(myData)
    });
    const data = await response.json();
    return data;
}

export const fetchPutMethod = async (id,myData) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(myData)
    });
    const data = await response.json();
    return data;
}

export const fetchPatchMethod = async (id,myData) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id,{
        method: 'Patch',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(myData)
    });
    const data = await response.json();
    return data;
}

export const fetchDeleteMethod = async (id) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id,{
        method: 'DELETE',
    });
    const data = await response.json();
    return data;
}