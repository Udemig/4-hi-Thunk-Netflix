import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export const baseImgUrl = 'https://image.tmdb.org/t/p/original';

const Hero = () => {
  const state = useSelector((store) => store.movieReducer);
  //   0-19 arası rastgele bir sayı bulma
  const index = Math.round(Math.random() * 19);

  //   filmlerden rastgele birini seç
  const film = state.popularMovies[index];

  if (!film) return ' Loading';

  return (
    <div className="row bg-dark text-light p-4">
      <div className="col-md-6 gap-3 mb-3 d-flex flex-column justify-content-center">
        <h1>{film.title}</h1>
        <p>{film.overview}</p>
        <p className="text-warning">IMDB: {film.vote_average}</p>
        <div className="d-flex gap-3 justify-content-center ">
          <Link to={`/movie/${film.id}`} className="btn btn-danger">
            Filmi İzle
          </Link>
          <button className="btn btn-info">Listeye Ekle</button>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-center">
        <img
          className="img-fluid rounded shadow"
          src={`${baseImgUrl}${film.backdrop_path}`}
        />
      </div>
    </div>
  );
};

export default Hero;
