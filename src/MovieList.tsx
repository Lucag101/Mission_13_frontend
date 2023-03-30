import { useState } from 'react';
import data from './MovieDataFinal.json';

const movies = data.MovieData;

function MovieList() {
  const [listMovies, setList] = useState(movies);
  const addMovie = () => {
    setList([
      ...movies,
      {
        Category: 'Action/Adventure',
        Title: 'Batman',
        Year: 1989,
        Director: 'Tim Burton',
        Rating: 'PG-13',
        Edited: 'No',
      },
    ]);
  };
  return (
    <>
      {/* <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button> */}
      <div>
        <div className="text-center">
          <h2>Movie Collection</h2>
        </div>
        <div>
          <table className="table border ">
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {listMovies.map((m) => (
                <tr>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Category}</td>
                  <td>{m.Edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MovieList;
