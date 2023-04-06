import { useEffect, useState } from 'react';
// import data from './MovieDataFinal.json';
import { MovieItem } from './types/movieApi';

// const movies = data.MovieData;

function MovieList() {
  const [listMovies, setList] = useState<MovieItem[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      const filteredList = temp.filter(
        (movie: MovieItem) => movie.edited.toLowerCase() === 'yes'
      );
      const sortedList = filteredList.sort((a: MovieItem, b: MovieItem) =>
        a.title.localeCompare(b.title)
      );
      setList(sortedList);
    };
    fetchMovie();
  }, []);

  // const addMovie = () => {
  //   setList([
  //     ...movies,
  //     {
  //       Category: 'Action/Adventure',
  //       Title: 'Batman',
  //       Year: 1989,
  //       Director: 'Tim Burton',
  //       Rating: 'PG-13',
  //       Edited: 'No',
  //     },
  //   ]);
  // };
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
                {/* <th>MovieId</th> */}
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
                <th>Lent To</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {listMovies.map((m) => (
                <tr key={m.movieId}>
                  {/* <td>{m.movieId}</td> */}
                  <td>{m.title}</td>
                  <td>{m.year}</td>
                  <td>{m.director}</td>
                  <td>{m.rating}</td>
                  <td>{m.category}</td>
                  <td>{m.edited}</td>
                  <td>{m.lentTo}</td>
                  <td>{m.notes}</td>
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
