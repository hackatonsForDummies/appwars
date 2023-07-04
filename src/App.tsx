import { useEffect, useState } from 'react';
import filmsHook from './hooks/filmsHook';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);
  const [getFilms] = filmsHook();

  useEffect(() => {
    getFilms().then((res: any) => setFilms(res || []));
  }, [getFilms])

  const convertDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.getFullYear();
  }

  const Row = ({ title, episode_id, release_date }: any) => {
    return (
      <tr>
        <td>{title}</td>
        <td>{episode_id}</td>
        <td>{convertDate(release_date)}</td>
      </tr>
    )
  }
  
  const List = () => {
    return (
      <table>
        <tr>
          <th>Titulo</th>
          <th>Episodio</th>
          <th>Año</th>
        </tr>
        {films.map((film: any) => <Row key={film.title} {...film} />)}
      </table>
    )
  }

  console.log('films', films)

  return (
    <div className="card">
      {
        !films.length
          ? <div>No hay películas cargadas todavía</div>
          : <List />
      }
    </div>
  )
}

export default App
