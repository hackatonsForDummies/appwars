import { apiGet } from '../services/api';

const endpoint = '/films';

let films: any = [];

export default function filmsHook() {
  const getFilms = () => {
    return new Promise((resolve, reject) => {
      if (!films.length) {
        apiGet(endpoint)
          .then((res: any) => {
            films = res?.results || [];
            resolve(res?.results || []);
          })
          .catch(e => {
            console.log('Error:', e)
            reject(e);
          });
      } else {
        resolve(films);
      }
    })
  }

  return [
    getFilms,
  ]
}
