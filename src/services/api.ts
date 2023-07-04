import axios from 'axios';

const url = 'https://swapi.dev/api';

export function apiGet(api: string) {
  return new Promise((resolve, reject) => {
    axios.get(`${url}${api}`)
      .then(res => resolve(res.data))
      .catch(e => {
        console.log('Error:', e)
        reject(e);
      });
  })
}
