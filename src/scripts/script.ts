import axios from 'axios'

async function getData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
    console.log(response.data);
}

getData()